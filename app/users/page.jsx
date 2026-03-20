"use client";

import AppLayout from "../AppLayout";
import UsersView from "../../src/components/views/UsersView";
import ProtectedRoute from "../../src/components/auth/ProtectedRoute";

export default function UsersPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AppLayout activeView="users">
        <UsersView isActive={true} />
      </AppLayout>
    </ProtectedRoute>
  );
}
