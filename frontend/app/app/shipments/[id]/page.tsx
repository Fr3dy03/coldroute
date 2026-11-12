'use client';

import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { AlertCircle, CheckCircle, Clock, User, FileText, Link as LIcon } from 'lucide-react';

const observations = [
  { t: '08:00', v: 5.2 },
  { t: '09:00', v: 5.0 },
  { t: '10:00', v: 8.4 },
  { t: '11:00', v: 9.1 },
  { t: '12:00', v: 7.9 },
  { t: '13:00', v: 5.5 },
  { t: '14:00', v: 5.1 },
];

const events = [
  { time: '08:00', actor: 'System', source: 'Sensor', data: 'Shipment created', status: 'info' },
  { time: '09:00', actor: 'Operator', source: 'Portal', data: 'Sensor registered', status: 'info' },
  { time: '10:00', actor: 'Driver', source: 'Scanner', data: 'Shipment dispatched', status: 'info' },
  { time: '10:30', actor: 'System', source: 'Sensor', data: 'First excursion detected (+5.2°C above max)', status: 'alert' },
  { time: '11:15', actor: 'System', source: 'Portal', data: 'Carrier notified', status: 'info' },
  { time: '11:25', actor: 'System', source: 'Portal', data: 'Receiving organisation notified', status: 'info' },
  { time: '14:00', actor: 'QA Reviewer', source: 'Portal', data: 'Evidence reviewed', status: 'success' },
  { time: '14:30', actor: 'QA Reviewer', source: 'Portal', data: 'Quality disposition recorded', status: 'success' },
];

export default function ShipmentDetail({ params }: { params: { id: string } }) {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <DashboardHeader title={`Shipment ${params.id}`} subtitle="Condition evidence, excursions and quality disposition" />
      {/* Shipment status header */}
      <Card className="border-coral/30">
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <CardTitle className="text-sm font-mono">CR-2026-0417 • Vaccine</CardTitle>
              <p className="text-xs text-slate">Origin → Destination • Carrier: NorthLine Logistics</p>
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-coral/10 border border-coral/30 text-coral text-xs font-mono font-bold">
                <AlertCircle size={14} /> Open excursion
              </span>
              <span className="px-3 py-1.5 rounded bg-ice text-slate text-xs font-mono border border-coldroute">In transit</span>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Temperature chart */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Temperature profile with allowed band</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={observations}>
              <CartesianGrid strokeDasharray="3 3" stroke="#DDE6EC" />
              <XAxis dataKey="t" stroke="#DDE6EC" tickLine={false} />
              <YAxis stroke="#DDE6EC" tickLine={false} />
              <Tooltip />
              <ReferenceLine y={5} stroke="#3B8F91" strokeDasharray="4 4" label={{ value: 'Max 5°C', position: 'inside' }} />
              <ReferenceLine y={2} stroke="#3B8F91" strokeDasharray="4 4" label={{ value: 'Min 2°C', position: 'inside' }} />
              <Line type="monotone" dataKey="v" stroke="#C95650" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Event timeline */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Evidence timeline</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 border-coldroute" />
            {events.map((e, i) => (
              <div key={i} className="relative mb-6">
                <div className="absolute left-[-8px] top-1 w-3 h-3 rounded-full border-2">
                  {e.status === 'alert' ? <span className="bg-coral border-coral" /> : e.status === 'success' ? <span className="bg-teal border-teal" /> : <span className="bg-deepblue border-deepblue" />}
                </div>
                <div className="text-xs font-mono text-slate mb-1">{e.time}</div>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <div className="text-sm font-medium text-midnight">{e.data}</div>
                  <div className="text-xs text-slate font-mono">{e.source} • {e.actor}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
