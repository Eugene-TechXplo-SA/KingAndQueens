import { Hono } from "hono";
import { supabase } from "../lib/supabase";
import { db } from "../lib/db";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../lib/jwt";
import type { AppBindings } from "../lib/types";

export const authRouter = new Hono<AppBindings>();

const isUniqueViolation = (error: unknown): boolean => {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "23505"
  );
};

const isMissingDatabaseConfig = (error: unknown): boolean => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message?: unknown }).message === "string" &&
    (error as { message: string }).message.includes("DATABASE_URL is required")
  );
};

const mapLoginError = (
  message: string,
): { error: string; status: 401 | 403 } => {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("email not confirmed")) {
    return {
      error: "Please confirm your email before signing in",
      status: 403,
    };
  }

  return { error: "Invalid credentials", status: 401 };
};

const mapSignupError = (
  message: string,
  status?: number,
): { error: string; status: 409 | 422 | 429 } => {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("already registered")) {
    return { error: "Email exists", status: 409 };
  }

  if (
    status === 429 ||
    normalizedMessage.includes("rate limit") ||
    normalizedMessage.includes("security purposes")
  ) {
    return {
      error: "Too many signup attempts. Please wait a minute and try again.",
      status: 429,
    };
  }

  return { error: message, status: 422 };
};

// Signup
authRouter.post("/signup", async (c) => {
  const { email, password } = await c.req.json();
  const normalizedEmail = String(email ?? "")
    .trim()
    .toLowerCase();

  if (!normalizedEmail || !password) {
    return c.json({ error: "Email and password are required" }, 400);
  }

  const { data, error } = await supabase.auth.signUp({
    email: normalizedEmail,
    password,
  });
  if (error) {
    const signupError = mapSignupError(
      error.message,
      (error as { status?: number }).status,
    );
    return c.json({ error: signupError.error }, signupError.status);
  }

  const supabaseUser = data.user;
  if (!supabaseUser) return c.json({ error: "Signup failed" }, 422);

  try {
    const { data: newUser, error: insertError } = await supabase
      .from("users")
      .insert({
        email: normalizedEmail,
        password_hash: "",
        status: "ACTIVE",
        kyc_status: "NONE",
      })
      .select()
      .single();

    if (insertError) {
      if (isUniqueViolation(insertError)) {
        return c.json({ error: "Email exists" }, 409);
      }
      console.error("[auth/signup] failed to create user profile", insertError);
      return c.json({ error: "Failed to create user profile" }, 500);
    }
  } catch (error) {
    if (isMissingDatabaseConfig(error)) {
      return c.json(
        { error: "Server misconfigured: DATABASE_URL is missing" },
        500,
      );
    }

    if (isUniqueViolation(error)) {
      return c.json({ error: "Email exists" }, 409);
    }

    console.error("[auth/signup] failed to create user profile", error);
    return c.json({ error: "Failed to create user profile" }, 500);
  }

  return c.json({ success: true });
});

// Login
authRouter.post("/login", async (c) => {
  const { email, password } = await c.req.json();
  const normalizedEmail = String(email ?? "")
    .trim()
    .toLowerCase();

  if (!normalizedEmail || !password) {
    return c.json({ error: "Email and password are required" }, 400);
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });
  if (error) {
    const loginError = mapLoginError(error.message);
    return c.json({ error: loginError.error }, loginError.status);
  }

  const authUser = data.user;
  if (!authUser) return c.json({ error: "Invalid credentials" }, 401);

  let user = null;

  try {
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("email", normalizedEmail)
      .single();

    if (userError && userError.code !== "PGRST116") {
      console.error("[auth/login] failed to fetch user", userError);
      return c.json({ error: "Failed to load user profile" }, 500);
    }

    if (!userData) {
      const { data: newUser, error: insertError } = await supabase
        .from("users")
        .insert({
          email: normalizedEmail,
          password_hash: "",
          status: "ACTIVE",
          kyc_status: "NONE",
        })
        .select()
        .single();

      if (insertError) {
        if (isUniqueViolation(insertError)) {
          const { data: existingUser } = await supabase
            .from("users")
            .select("*")
            .eq("email", normalizedEmail)
            .single();
          user = existingUser;
        } else {
          console.error("[auth/login] failed to create user profile", insertError);
          return c.json({ error: "Failed to create user profile" }, 500);
        }
      } else {
        user = newUser;
      }
    } else {
      user = userData;
    }
  } catch (profileError) {
    console.error("[auth/login] unexpected profile lookup error", profileError);
    return c.json({ error: "User profile service unavailable" }, 500);
  }

  if (!user) return c.json({ error: "User not found" }, 404);
  if (user.status === "DEACTIVATED")
    return c.json({ error: "Account deactivated" }, 403);

  const accessToken = generateAccessToken({
    id: user.id,
    principal_type: "USER",
  });
  const refreshToken = generateRefreshToken({
    id: user.id,
    principal_type: "USER",
  });

  return c.json({ accessToken, refreshToken, user });
});

// Refresh token
authRouter.post("/refresh", async (c) => {
  const { token } = await c.req.json();
  try {
    const payload = verifyRefreshToken(token) as {
      id: string;
      principal_type: string;
    };
    const accessToken = generateAccessToken({
      id: payload.id,
      principal_type: payload.principal_type,
    });
    return c.json({ accessToken });
  } catch (err) {
    return c.json({ error: "Invalid refresh token" }, 401);
  }
});

// Password reset request
authRouter.post("/reset-password", async (c) => {
  const { email } = await c.req.json();
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://yourapp.com/reset-password",
  });
  return c.json({ success: true });
});
