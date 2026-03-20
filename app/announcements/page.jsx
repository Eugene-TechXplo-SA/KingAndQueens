"use client";

import AppLayout from "../AppLayout";
import AnnouncementsView from "../../src/components/views/AnnouncementsView";
import ProtectedRoute from "../../src/components/auth/ProtectedRoute";

export default function AnnouncementsPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AppLayout activeView="announcements">
        <AnnouncementsView isActive={true} />
      </AppLayout>
    </ProtectedRoute>
  );
}
