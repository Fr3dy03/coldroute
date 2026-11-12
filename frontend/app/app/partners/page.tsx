'use client';

import { DashboardHeader } from '@/components/dashboard-header';

export default function Partners() {
  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <DashboardHeader title="Partners" subtitle="Carrier and receiving organisation acknowledgements" />
      <div className="text-slate text-sm">Partner acknowledgement records and shared shipment access.</div>
    </div>
  );
}
