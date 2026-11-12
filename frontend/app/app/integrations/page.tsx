'use client';

import { DashboardHeader } from '@/components/dashboard-header';

export default function Integrations() {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <DashboardHeader title="Integrations" subtitle="Sensor provider adapters and ingestion" />
      <div className="text-slate text-sm">API polling, webhooks, SensorThings, EPCIS, batch import. DEMO mode visibly labelled.</div>
    </div>
  );
}
