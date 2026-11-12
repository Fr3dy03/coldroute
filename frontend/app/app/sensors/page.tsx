'use client';

import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const sensors = [
  { serial: 'SEN-T-00142', model: 'ThermoTag Pro', type: 'Temperature', unit: '°C', state: 'ONLINE', last: '2m ago' },
  { serial: 'SEN-T-00143', model: 'ThermoTag Pro', type: 'Temperature', unit: '°C', state: 'OFFLINE', last: '4h ago' },
  { serial: 'SEN-T-00144', model: 'CoolSense X1', type: 'Temperature', unit: '°C', state: 'DEGRADED', last: '45m ago' },
];

export default function Sensors() {
  return (
    <div className="p-6 space-y-6">
      <DashboardHeader title="Sensors" subtitle="Registered sensor devices and connectivity state" />
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-coldroute">
              <th className="text-xs font-medium text-slate pb-3">Serial</th>
              <th className="text-xs font-medium text-slate pb-3">Model</th>
              <th className="text-xs font-medium text-slate pb-3">Type</th>
              <th className="text-xs font-medium text-slate pb-3">Unit</th>
              <th className="text-xs font-medium text-slate pb-3">State</th>
              <th className="text-xs font-medium text-slate pb-3">Last observed</th>
              <th className="text-xs font-medium text-slate pb-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {sensors.map((s) => (
              <tr key={s.serial} className="border-b border-coldroute/50 hover:bg-ice/50 transition">
                <td className="py-3 text-xs font-mono">{s.serial}</td>
                <td className="py-3 text-xs">{s.model}</td>
                <td className="py-3 text-xs">{s.type}</td>
                <td className="py-3 text-xs font-mono">{s.unit}</td>
                <td className="py-3 text-xs">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${s.state === 'ONLINE' ? 'bg-teal/10 text-teal border border-teal/20' : s.state === 'OFFLINE' ? 'bg-coral/10 text-coral border border-coral/20' : 'bg-amber/10 text-amber border border-amber/20'}`}>
                    {s.state}
                  </span>
                </td>
                <td className="py-3 text-xs text-slate font-mono">{s.last}</td>
                <td className="py-3 text-xs text-right">
                  <Link href={`/app/sensors/${s.serial}`} className="text-deepblue hover:underline">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
