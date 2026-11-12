'use client';

import { DashboardHeader } from '@/components/dashboard-header';

export default function Settings() {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <DashboardHeader title="Settings" subtitle="Organisation, users, and API credentials" />
      <div className="text-slate text-sm">Organisation boundaries and encrypted sensor credentials.</div>
    </div>
  );
}
