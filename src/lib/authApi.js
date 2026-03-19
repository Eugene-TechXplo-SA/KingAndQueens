const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001";

class AuthApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "AuthApiError";
    this.status = status;
  }
}

async function parseJsonSafe(response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

async function post(path, payload) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await parseJsonSafe(response);

  if (!response.ok) {
    const errorMessage = data?.error || "Authentication request failed.";
    throw new AuthApiError(errorMessage, response.status);
  }

  return data;
}

export async function signupWithEmail(email, password) {
  return post("/auth/signup", { email, password });
}

export async function loginWithEmail(email, password) {
  return post("/auth/login", { email, password });
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
    // Ignore storage failures in restricted browser modes.
  }
}

export function resolvePostLoginRoute(email) {
  return "/user";
}

export { AuthApiError, API_BASE_URL };
