import { Hono } from "hono";

import { authenticate } from "../middleware/auth";
import { walletService } from "../services/walletService";
import type { AppBindings } from "../lib/types";

export const walletRouter = new Hono<AppBindings>();

walletRouter.post("/connect", authenticate, async (c) => {
  const { address, network } = await c.req.json();
  const user = c.get("user");
  const result = await walletService.connect(user.id, address, network);
  return c.json(result);
});
