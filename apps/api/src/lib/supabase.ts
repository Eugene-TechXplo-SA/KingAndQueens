import "./env";

import { createClient } from "@supabase/supabase-js";

import { getRequiredEnv } from "./env";

// Public client (respects user session)
export const supabase = createClient(
  getRequiredEnv("SUPABASE_URL"),
  getRequiredEnv("SUPABASE_ANON_KEY"),
);

// Admin client (FULL ACCESS – backend only)
export const supabaseAdmin = createClient(
  getRequiredEnv("SUPABASE_URL"),
  getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"),
);
