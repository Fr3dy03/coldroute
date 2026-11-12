'use client';

import { Wordmark, ProductIcon } from '@/components/wordmark';
import { BOTFooter } from '@/components/bot-footer';
import { AlertCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white border-b border-coldroute sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ProductIcon className="w-6 h-6" />
            <Wordmark className="text-midnight" />
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate">
            <a href="#platform" className="text-midnight">Platform</a>
            <a href="#cold-chain-monitoring">Monitoring</a>
            <a href="#shipment-evidence">Evidence</a>
            <a href="#quality-workflows">Quality</a>
            <a href="#sensor-integrations">Integrations</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="text-sm text-slate hover:text-deepblue">Contact</a>
            <a href="#create-shipment" className="ml-4 px-5 py-2.5 bg-deepblue text-white rounded text-sm font-medium hover:bg-midnight transition">Create a Shipment Case</a>
          </div>
        </div>
      </nav>

      <section className="bg-ice border-b border-coldroute py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-medium mb-6 border border-teal/20">
            BUILT ON BOT CHAIN
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-midnight text-balance mb-6 leading-tight">
            One trusted evidence trail for every cold-chain handoff.
          </h1>
          <p className="text-lg text-slate mb-8 max-w-2xl leading-relaxed">
            Connect sensor observations, shipment events and quality decisions
            through shared, verifiable evidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-7 py-3.5 bg-midnight text-white rounded text-sm font-medium hover:bg-deepblue transition">Create a Shipment Case</button>
            <button className="px-7 py-3.5 bg-white text-midnight border border-coldroute rounded text-sm font-medium hover:bg-ice transition">View an Evidence Example</button>
          </div>
          <div className="bg-white rounded-lg border border-coldroute shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-coldroute/50 flex justify-between items-center">
              <span className="font-mono text-xs text-slate">SHIPMENT • CR-2026-0417 • VACCINE</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-coral/10 text-coral text-xs font-medium">
                <AlertCircle size={12} /> EXCURSION DETECTED
              </span>
            </div>
            <div className="px-6 py-6">
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="font-mono text-xs text-slate mb-1">30 min</div>
                  <div className="text-xs font-medium text-midnight">+5.2°C above max</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate mb-1">Carrier notified</div>
                  <div className="text-xs font-medium text-midnight">+45 min</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate mb-1">Receiver notified</div>
                  <div className="text-xs font-medium text-midnight">+52 min</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-slate mb-1">Quality review</div>
                  <div className="text-xs font-medium text-midnight">Open</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="platform" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-midnight mb-4">Fragmented cold-chain evidence</h2>
          <p className="text-slate mb-8 max-w-xl leading-relaxed">
            When a shipment experiences a temperature excursion, carriers, receivers
            and quality teams often hold different records. ColdRoute unifies them
            into a single reviewable evidence case with on-chain commitments.
          </p>
        </div>
      </section>
      <section id="cold-chain-monitoring" className="py-20 px-6 bg-ice">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-midnight mb-4">Condition monitoring</h2>
          <p className="text-slate mb-8 max-w-xl leading-relaxed">
            Time-series temperature observations with configured upper and lower
            thresholds, out-of-range period detection, and missing-data alerts.
            Supports Celsius and Fahrenheit with explicit units.
          </p>
        </div>
      </section>
      <section id="shipment-evidence" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-midnight mb-4">Shipment evidence</h2>
          <p className="text-slate mb-8 max-w-xl leading-relaxed">
            Complete evidence dossier per shipment: sensor identity, temperature
            data, threshold policy, excursion periods, data gaps, participant
            acknowledgements, reviewer details, final disposition.
          </p>
        </div>
      </section>
      <section id="quality-workflows" className="py-20 px-6 bg-ice">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-midnight mb-4">Quality review</h2>
          <p className="text-slate mb-8 max-w-xl leading-relaxed">
            Quality reviewers inspect original readings, missing intervals, and
            policy thresholds, then record a qualified disposition. ColdRoute never
            labels a product safe automatically.
          </p>
        </div>
      </section>
      <section id="sensor-integrations" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-midnight mb-4">Sensor integrations</h2>
          <p className="text-slate mb-8 max-w-xl leading-relaxed">
            Provider adapters for API polling, signed webhooks, OGC SensorThings,
            GS1 EPCIS, and batch import. A visibly labelled DEMO mode is available
            for development and demonstrations.
          </p>
        </div>
      </section>
      <section id="security" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-midnight mb-4">Security and privacy</h2>
          <p className="text-slate mb-8 max-w-xl leading-relaxed">
            Organisation boundaries, encrypted sensor credentials, secured evidence
            documents, audited downloads, webhook signature validation, and
            preserved original sensor data.
          </p>
        </div>
      </section>
      <section className="py-20 px-6 bg-midnight text-white" id="create-shipment">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to create a case?</h2>
          <p className="text-iceblue/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Register your shipment, configure your temperature policy, and invite
            your partners to a shared evidence case.
          </p>
          <a href="/app/shipments/new" className="inline-block px-8 py-3 bg-deepblue text-white rounded font-medium hover:bg-teal transition">Start a Shipment Case</a>
        </div>
      </section>
      <BOTFooter />
    </div>
  );
}

