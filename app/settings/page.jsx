"use client";

import AppLayout from "../AppLayout";
import SettingsView from "../../src/components/views/SettingsView";
import ProtectedRoute from "../../src/components/auth/ProtectedRoute";

export default function SettingsPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AppLayout activeView="settings">
        <SettingsView isActive={true} />
      </AppLayout>
    </ProtectedRoute>
  );
}
