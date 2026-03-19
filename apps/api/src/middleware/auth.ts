import type { MiddlewareHandler } from "hono";

import { supabase } from "../lib/supabase";
import { db } from "../lib/db";
import { verifyAccessToken } from "../lib/jwt";
import type { AppBindings } from "../lib/types";

export const authenticate: MiddlewareHandler<AppBindings> = async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader) return c.json({ error: "Unauthorized" }, 401);

  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!token) return c.json({ error: "Unauthorized" }, 401);

  try {
    const payload = verifyAccessToken(token) as {
      id?: string;
      principal_type?: string;
    };

    if (payload?.id && payload.principal_type === "USER") {
      const user = await db.users.findUnique({ where: { id: payload.id } });
      if (!user) return c.json({ error: "User not found" }, 404);

      c.set("user", user);
      return next();
    }
  } catch {
    // Ignore and try Supabase token validation below.
  }

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return c.json({ error: "Invalid token" }, 401);

  const user = await db.users.findUnique({
    where: { supabase_user_id: data.user.id },
  });
  if (!user) return c.json({ error: "User not found" }, 404);

  c.set("user", user);
  return next();
};
