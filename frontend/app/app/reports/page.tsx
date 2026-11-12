'use client';

import { DashboardHeader } from '@/components/dashboard-header';

export default function Reports() {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <DashboardHeader title="Reports" subtitle="Generate final evidence reports and dossiers" />
      <div className="text-slate text-sm">Generate complete evidence reports with verification references.</div>
    </div>
  );
}
