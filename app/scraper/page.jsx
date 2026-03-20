"use client";

import AppLayout from "../AppLayout";
import ScraperView from "../../src/components/views/ScraperView";
import ProtectedRoute from "../../src/components/auth/ProtectedRoute";

export default function ScraperPage() {
  return (
    <ProtectedRoute requireAdmin={true}>
      <AppLayout activeView="scraper">
        <ScraperView isActive={true} />
      </AppLayout>
    </ProtectedRoute>
  );
}
