'use client';

import { DashboardHeader } from '@/components/dashboard-header';

export default function Evidence() {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <DashboardHeader title="Evidence Records" subtitle="Secured evidence documents with audited downloads" />
      <div className="text-slate text-sm">Evidence dossier and document repository.</div>
    </div>
  );
}
