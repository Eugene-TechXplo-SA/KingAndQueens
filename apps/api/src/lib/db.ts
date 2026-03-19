import { supabaseAdmin } from "./supabase";
import type { KycStatus, UserRecord, UserStatus } from "./types";

type UserLookup = {
  id?: string;
  email?: string;
  supabase_user_id?: string;
};

type CreateUserInput = {
  supabase_user_id: string;
  email: string;
  status: UserStatus;
  kyc_status: KycStatus;
};

type CreateAuditLogInput = {
  user_id: string;
  action: string;
  detail: object;
  created_at: Date;
};

type SupabaseErrorLike = {
  message: string;
  code?: string | null;
};

const isMissingColumn = (error: SupabaseErrorLike, columnName: string): boolean => {
  const message = error.message.toLowerCase();
  const normalizedColumn = columnName.toLowerCase();

  return (
    error.code === "42703" ||
    message.includes("does not exist") ||
    message.includes("could not find")
  ) && message.includes(normalizedColumn);
};

const isMissingSupabaseUserIdColumn = (error: SupabaseErrorLike): boolean => {
  return isMissingColumn(error, "supabase_user_id");
};

const isMissingStatusColumn = (error: SupabaseErrorLike): boolean => {
  return isMissingColumn(error, "status");
};

const isMissingKycStatusColumn = (error: SupabaseErrorLike): boolean => {
  return isMissingColumn(error, "kyc_status");
};

const isMissingOptionalUsersColumn = (error: SupabaseErrorLike): boolean => {
  return (
    isMissingSupabaseUserIdColumn(error) ||
    isMissingStatusColumn(error) ||
    isMissingKycStatusColumn(error)
  );
};

const toDatabaseError = (
  error: SupabaseErrorLike,
): Error & { code?: string } => {
  const dbError = new Error(error.message) as Error & { code?: string };
  if (error.code) dbError.code = error.code;
  return dbError;
};

const mapUserRow = (row: Record<string, unknown>): UserRecord => ({
  id: String(row.id),
  // Some environments store auth user id in `id` instead of `supabase_user_id`.
  supabase_user_id: String(row.supabase_user_id ?? row.id),
  email: String(row.email),
  status: (row.status as UserStatus | undefined) ?? "ACTIVE",
  kyc_status: (row.kyc_status as KycStatus | undefined) ?? "NONE",
});

const selectUsersBaseColumns = (query: ReturnType<typeof supabaseAdmin.from>) =>
  query.select("id, email, status, kyc_status");

const selectUsersWithSupabaseId = (
  query: ReturnType<typeof supabaseAdmin.from>,
) => query.select("id, supabase_user_id, email, status, kyc_status");

const selectUsersMinimalColumns = (
  query: ReturnType<typeof supabaseAdmin.from>,
) => query.select("id, email");

const selectUsersWithSupabaseIdMinimal = (
  query: ReturnType<typeof supabaseAdmin.from>,
) => query.select("id, supabase_user_id, email");

const findUserByEmail = async (email: string): Promise<UserRecord | null> => {
  const withSupabaseId = await selectUsersWithSupabaseId(
    supabaseAdmin.from("users"),
  )
    .eq("email", email)
    .limit(1);

  if (!withSupabaseId.error) {
    return withSupabaseId.data[0]
      ? mapUserRow(withSupabaseId.data[0] as Record<string, unknown>)
      : null;
  }

  if (!isMissingSupabaseUserIdColumn(withSupabaseId.error)) {
    if (!isMissingOptionalUsersColumn(withSupabaseId.error)) {
      throw toDatabaseError(withSupabaseId.error);
    }
  }

  const fallback = await selectUsersBaseColumns(supabaseAdmin.from("users"))
    .eq("email", email)
    .limit(1);

  if (!fallback.error) {
    return fallback.data[0]
      ? mapUserRow(fallback.data[0] as Record<string, unknown>)
      : null;
  }

  if (!isMissingOptionalUsersColumn(fallback.error)) {
    throw toDatabaseError(fallback.error);
  }

  const minimal = await selectUsersMinimalColumns(supabaseAdmin.from("users"))
    .eq("email", email)
    .limit(1);

  if (minimal.error) throw toDatabaseError(minimal.error);

  return minimal.data[0]
    ? mapUserRow(minimal.data[0] as Record<string, unknown>)
    : null;
};

const findUserById = async (id: string): Promise<UserRecord | null> => {
  const withSupabaseId = await selectUsersWithSupabaseId(
    supabaseAdmin.from("users"),
  )
    .eq("id", id)
    .limit(1);

  if (!withSupabaseId.error) {
    return withSupabaseId.data[0]
      ? mapUserRow(withSupabaseId.data[0] as Record<string, unknown>)
      : null;
  }

  if (!isMissingOptionalUsersColumn(withSupabaseId.error)) {
    throw toDatabaseError(withSupabaseId.error);
  }

  const fallback = await selectUsersBaseColumns(supabaseAdmin.from("users"))
    .eq("id", id)
    .limit(1);

  if (!fallback.error) {
    return fallback.data[0]
      ? mapUserRow(fallback.data[0] as Record<string, unknown>)
      : null;
  }

  if (!isMissingOptionalUsersColumn(fallback.error)) {
    throw toDatabaseError(fallback.error);
  }

  const minimal = await selectUsersMinimalColumns(supabaseAdmin.from("users"))
    .eq("id", id)
    .limit(1);

  if (minimal.error) throw toDatabaseError(minimal.error);

  return minimal.data[0]
    ? mapUserRow(minimal.data[0] as Record<string, unknown>)
    : null;
};

const findUserBySupabaseId = async (
  supabaseUserId: string,
): Promise<UserRecord | null> => {
  const withSupabaseId = await selectUsersWithSupabaseId(
    supabaseAdmin.from("users"),
  )
    .eq("supabase_user_id", supabaseUserId)
    .limit(1);

  if (!withSupabaseId.error) {
    return withSupabaseId.data[0]
      ? mapUserRow(withSupabaseId.data[0] as Record<string, unknown>)
      : null;
  }

  if (!isMissingSupabaseUserIdColumn(withSupabaseId.error)) {
    throw toDatabaseError(withSupabaseId.error);
  }

  const fallback = await selectUsersBaseColumns(supabaseAdmin.from("users"))
    .eq("id", supabaseUserId)
    .limit(1);

  if (fallback.error) throw toDatabaseError(fallback.error);

  return fallback.data[0]
    ? mapUserRow(fallback.data[0] as Record<string, unknown>)
    : null;
};

const findUserBy = async (where: UserLookup): Promise<UserRecord | null> => {
  if (where.email) {
    return findUserByEmail(where.email);
  }

  if (where.id) {
    return findUserById(where.id);
  }

  if (where.supabase_user_id) {
    return findUserBySupabaseId(where.supabase_user_id);
  }

  return null;
};

export const db = {
  users: {
    findUnique: async ({ where }: { where: UserLookup }) => findUserBy(where),
    create: async (input: CreateUserInput): Promise<UserRecord> => {
      const createWithSupabaseColumn = await supabaseAdmin
        .from("users")
        .insert({
          supabase_user_id: input.supabase_user_id,
          email: input.email,
          status: input.status,
          kyc_status: input.kyc_status,
        })
        .select("*")
        .single();

      if (!createWithSupabaseColumn.error) {
        return mapUserRow(createWithSupabaseColumn.data as Record<string, unknown>);
      }

      const fallbackWithoutStatusAndKyc =
        isMissingStatusColumn(createWithSupabaseColumn.error) ||
        isMissingKycStatusColumn(createWithSupabaseColumn.error);

      if (
        !isMissingSupabaseUserIdColumn(createWithSupabaseColumn.error) &&
        !fallbackWithoutStatusAndKyc
      ) {
        throw toDatabaseError(createWithSupabaseColumn.error);
      }

      if (fallbackWithoutStatusAndKyc) {
        const createWithSupabaseMinimal = await supabaseAdmin
          .from("users")
          .insert({
            supabase_user_id: input.supabase_user_id,
            email: input.email,
          })
          .select("*")
          .single();

        if (!createWithSupabaseMinimal.error) {
          return mapUserRow(createWithSupabaseMinimal.data as Record<string, unknown>);
        }

        if (!isMissingSupabaseUserIdColumn(createWithSupabaseMinimal.error)) {
          throw toDatabaseError(createWithSupabaseMinimal.error);
        }
      }

      const fallbackCreate = await supabaseAdmin
        .from("users")
        .insert({
          id: input.supabase_user_id,
          email: input.email,
        })
        .select("*")
        .single();

      if (fallbackCreate.error) throw toDatabaseError(fallbackCreate.error);

      return mapUserRow(fallbackCreate.data as Record<string, unknown>);
    },
  },
  audit_logs: {
    create: async (input: CreateAuditLogInput): Promise<void> => {
      const { error } = await supabaseAdmin.from("audit_logs").insert({
        user_id: input.user_id,
        action: input.action,
        detail: input.detail,
        created_at: input.created_at.toISOString(),
      });

      if (error) throw toDatabaseError(error);
    },
  },
};
