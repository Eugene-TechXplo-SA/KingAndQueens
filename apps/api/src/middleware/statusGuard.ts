import type { MiddlewareHandler } from "hono";

import type { AppBindings } from "../lib/types";

export const enforceUserStatus: MiddlewareHandler<AppBindings> = async (
  c,
  next,
) => {
  const user = c.get("user");

  if (user.status === "DEACTIVATED")
    return c.json({ error: "Account deactivated" }, 403);
  if (user.status === "BANNED") c.set("readOnly", true);

  return next();
};
