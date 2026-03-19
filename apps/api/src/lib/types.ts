export type UserStatus = "ACTIVE" | "DEACTIVATED" | "BANNED";

export type KycStatus = "NONE" | "PENDING" | "APPROVED" | "REJECTED";

export interface UserRecord {
  id: string;
  supabase_user_id: string;
  email: string;
  status: UserStatus;
  kyc_status: KycStatus;
}

export type AppBindings = {
  Variables: {
    user: UserRecord;
    readOnly: boolean;
  };
};
