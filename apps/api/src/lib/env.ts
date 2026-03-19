import { config } from "dotenv";
import { resolve } from "node:path";

config({ path: resolve(process.cwd(), ".env") });

export const getEnv = (name: string): string | undefined => {
  const value = process.env[name];
  return value && value.length > 0 ? value : undefined;
};

export const getRequiredEnv = (name: string): string => {
  const value = getEnv(name);
  if (!value) {
    throw new Error(`${name} is required.`);
  }

  return value;
};
