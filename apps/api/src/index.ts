import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { authRouter } from "./routes/auth";
import { walletRouter } from "./routes/wallet";
import { getEnv } from "./lib/env";
import type { AppBindings } from "./lib/types";

const app = new Hono<AppBindings>();

app.onError((err, c) => {
  console.error("[api] unhandled error", err);
  return c.json({ error: "Internal server error" }, 500);
});

app.notFound((c) => c.json({ error: "Not found" }, 404));

app.use(
  "*",
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  }),
);

app.route("/auth", authRouter);
app.route("/wallet", walletRouter);

const port = Number(getEnv("PORT") ?? 3001);

serve({
  fetch: app.fetch,
  port,
});

console.log(`API server listening on http://localhost:${port}`);

export default app;
