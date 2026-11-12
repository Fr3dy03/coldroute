'use client';

import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const exceptions = [
  { id: 'EXC-001', shipment: 'CR-2026-0417', type: 'Upper threshold', started: '10:30', status: 'Open' },
  { id: 'EXC-002', shipment: 'CR-2026-0418', type: 'Missing data', started: '14:10', status: 'Open' },
];

export default function Exceptions() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader title="Exceptions" subtitle="Open excursions and missing-data events" />
      <div className="grid gap-4">
        {exceptions.map((e) => (
          <Card key={e.id} className="border-coral/30">
            <CardHeader className="pb-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <CardTitle className="text-sm font-mono">{e.id}</CardTitle>
                <p className="text-xs text-slate">{e.shipment} • {e.type}</p>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-coral/10 text-coral text-xs font-mono border border-coral/20">{e.status}</span>
                <Link href={`/app/exceptions/${e.id}`} className="text-xs font-medium text-deepblue hover:underline">Review →</Link>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-slate">Started {e.started} • Awaiting quality review</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
