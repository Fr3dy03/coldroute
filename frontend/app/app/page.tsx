'use client';

import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Overview() {
  const stats = [
    { label: 'Active Shipments', value: '12', icon: 'Truck', color: 'text-deepblue' },
    { label: 'Open Excursions', value: '2', icon: 'AlertTriangle', color: 'text-coral' },
    { label: 'Missing Feeds', value: '1', icon: 'Sensor', color: 'text-amber' },
    { label: 'Pending Ack.', value: '3', icon: 'Users', color: 'text-slate' },
    { label: 'Open Reviews', value: '1', icon: 'ShieldCheck', color: 'text-teal' },
  ];
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader title="Overview" subtitle="Cold-chain evidence at a glance" />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="bg-white border border-coldroute">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate font-normal">{s.label}</CardTitle>
              <span className={`text-xs font-mono ${s.color}`}>{s.value}</span>
            </CardHeader>
            <CardContent className="pt-0"></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
