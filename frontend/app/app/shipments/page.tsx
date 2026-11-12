'use client';

import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const shipments = [
  { reference: 'CR-2026-0417', category: 'Vaccine', status: 'IN_TRANSIT', carrier: 'NorthLine Logistics', receiver: 'Central Pharmacy' },
  { reference: 'CR-2026-0418', category: 'Insulin', status: 'EXCEPTION', carrier: 'ColdMove', receiver: 'City Clinic' },
  { reference: 'CR-2026-0419', category: 'Biologic', status: 'DISPATCHED', carrier: 'NorthLine Logistics', receiver: 'Regional Hospital' },
];

export default function Shipments() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader title="Shipments" subtitle="Manage and review cold-chain shipment cases" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {shipments.map((s) => (
          <Card key={s.reference} className="hover:shadow-md transition">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-sm font-mono">{s.reference}</CardTitle>
                  <p className="text-xs text-slate">{s.category}</p>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${s.status === 'EXCEPTION' ? 'bg-coral/10 text-coral' : 'bg-teal/10 text-teal'}`}>
                  {s.status}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-slate mb-3">Carrier: {s.carrier}</p>
              <p className="text-xs text-slate mb-3">Receiver: {s.receiver}</p>
              <Link href={`/app/shipments/${s.reference}`} className="text-sm font-medium text-deepblue hover:underline">View case →</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
