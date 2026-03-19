"use client";

import AppLayout from "../AppLayout";
import SettingsView from "../../src/components/views/SettingsView";

export default function SettingsPage() {
  return (
    <AppLayout activeView="settings">
      <SettingsView isActive={true} />
    </AppLayout>
  );
}
