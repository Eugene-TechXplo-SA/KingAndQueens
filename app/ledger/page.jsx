"use client";

import AppLayout from "../AppLayout";
import LedgerView from "../../src/components/views/LedgerView";
import ProtectedRoute from "../../src/components/auth/ProtectedRoute";

export default function LedgerPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AppLayout activeView="ledger">
        <LedgerView isActive={true} />
      </AppLayout>
    </ProtectedRoute>
  );
}
