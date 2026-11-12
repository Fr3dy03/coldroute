'use client';

import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reviews = [
  { id: 'QR-001', shipment: 'CR-2026-0417', reviewer: 'QA Reviewer', status: 'Open', type: 'Excursion review' },
];

export default function QualityReviews() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader title="Quality Reviews" subtitle="Review excursions and record qualified dispositions" />
      <div className="grid gap-4">
        {reviews.map((r) => (
          <Card key={r.id}>
            <CardHeader className="pb-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <CardTitle className="text-sm font-mono">{r.id}</CardTitle>
                <p className="text-xs text-slate">{r.shipment} • {r.type}</p>
              </div>
              <span className="px-2 py-1 rounded bg-teal/10 text-teal text-xs font-mono border border-teal/20">{r.status}</span>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs text-slate">Reviewer: {r.reviewer} • No automatic safety determination</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
