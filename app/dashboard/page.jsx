"use client";

import AppLayout from "../AppLayout";
import DashboardView from "../../src/components/views/DashboardView";
import ProtectedRoute from "../../src/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AppLayout activeView="dashboard">
        <DashboardView isActive={true} />
      </AppLayout>
    </ProtectedRoute>
  );
}
