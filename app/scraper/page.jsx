"use client";

import AppLayout from "../AppLayout";
import ScraperView from "../../src/components/views/ScraperView";

export default function ScraperPage() {
  return (
    <AppLayout activeView="scraper">
      <ScraperView isActive={true} />
    </AppLayout>
  );
}
