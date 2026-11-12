'use client';

import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewShipment() {
  const steps = [
    'Shipment reference',
    'Product category',
    'Origin',
    'Destination',
    'Expected delivery',
    'Carrier',
    'Receiving organisation',
    'Sensor provider',
    'Temperature policy',
    'Review and create',
  ];
  return (
    <div className="p-6 space-y-6 max-w-3xl">
      <DashboardHeader title="New Shipment" subtitle="Multi-step shipment registration" />
      <Card>
        <CardHeader>
          <CardTitle>Step 1 of 10 — Shipment reference</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-sm text-slate mb-6">Route details are protected and access-controlled.</div>
          <div className="grid grid-cols-4 gap-4 text-xs text-slate mb-8">
            {steps.map((s, i) => (
              <div key={s} className="text-center p-3 rounded border border-coldroute/50">
                <div className={`font-mono ${i === 0 ? 'text-deepblue font-bold' : 'text-slate'}`}>{i + 1}</div>
                <div className="mt-1">{s}</div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <label className="block text-xs font-medium text-slate mb-1">Shipment reference</label>
            <input className="w-full border border-coldroute rounded px-3 py-2 text-sm font-mono" placeholder="e.g. CR-2026-0417" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
