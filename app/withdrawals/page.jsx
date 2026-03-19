"use client";

import AppLayout from "../AppLayout";
import WithdrawalsView from "../../src/components/views/WithdrawalsView";

export default function WithdrawalsPage() {
  return (
    <AppLayout activeView="withdrawals">
      <WithdrawalsView isActive={true} />
    </AppLayout>
  );
}
