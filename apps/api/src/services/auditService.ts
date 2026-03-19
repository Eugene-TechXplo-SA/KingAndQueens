import { db } from "../lib/db";

export const auditService = {
  log: async (userId: string, action: string, detail: object = {}) => {
    await db.audit_logs.create({
      user_id: userId,
      action,
      detail,
      created_at: new Date(),
    });
  },
};
