"use client";

import AppLayout from "../AppLayout";
import ApprovalsView from "../../src/components/views/ApprovalsView";
import ProtectedRoute from "../../src/components/auth/ProtectedRoute";

export default function ApprovalsPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AppLayout activeView="approvals">
        <ApprovalsView isActive={true} />
      </AppLayout>
    </ProtectedRoute>
  );
}
