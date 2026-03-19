import { supabase } from "./supabaseClient";

class AuthApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "AuthApiError";
    this.status = status;
  }
}

export async function signupWithEmail(email, password) {
  const normalizedEmail = email.trim().toLowerCase();

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: normalizedEmail,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (authError) {
    throw new AuthApiError(authError.message, 400);
  }

  if (!authData.user) {
    throw new AuthApiError("アカウント作成に失敗しました。", 400);
  }

  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("email", normalizedEmail)
    .single();

  if (!existingUser) {
    const { error: insertError } = await supabase.from("users").insert({
      email: normalizedEmail,
      password_hash: "",
      status: "ACTIVE",
      kyc_status: "NONE",
    });

    if (insertError && insertError.code !== "23505") {
      console.error("Failed to create user record:", insertError);
      throw new AuthApiError("ユーザープロフィールの作成に失敗しました。", 500);
    }
  }

  return { success: true, user: authData.user };
}

export async function loginWithEmail(email, password) {
  const normalizedEmail = email.trim().toLowerCase();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });

  if (error) {
    throw new AuthApiError(
      error.message === "Invalid login credentials"
        ? "メールアドレスまたはパスワードが正しくありません。"
        : error.message,
      401
    );
  }

  if (!data.user) {
    throw new AuthApiError("ログインに失敗しました。", 401);
  }

  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("*")
    .eq("email", normalizedEmail)
    .single();

  if (userError || !userData) {
    const { error: insertError } = await supabase.from("users").insert({
      email: normalizedEmail,
      password_hash: "",
      status: "ACTIVE",
      kyc_status: "NONE",
    });

    if (insertError && insertError.code !== "23505") {
      console.error("Failed to create user record:", insertError);
    }
  }

  return {
    accessToken: data.session?.access_token,
    refreshToken: data.session?.refresh_token,
    user: data.user,
  };
}

export function persistAuthSession(payload) {
  if (typeof window === "undefined") return;

  try {
    if (payload?.accessToken) {
      localStorage.setItem("kq_access_token", payload.accessToken);
    }
    if (payload?.refreshToken) {
      localStorage.setItem("kq_refresh_token", payload.refreshToken);
    }
    if (payload?.user) {
      localStorage.setItem("kq_user", JSON.stringify(payload.user));
    }
  } catch {
    // Ignore storage failures
  }
}

export function resolvePostLoginRoute(email) {
  return "/user";
}

export { AuthApiError };
