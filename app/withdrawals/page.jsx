"use client";

import AppLayout from "../AppLayout";
import WithdrawalsView from "../../src/components/views/WithdrawalsView";
import ProtectedRoute from "../../src/components/auth/ProtectedRoute";

export default function WithdrawalsPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AppLayout activeView="withdrawals">
        <WithdrawalsView isActive={true} />
      </AppLayout>
    </ProtectedRoute>
  );
}
