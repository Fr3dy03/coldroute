export default function Platform() {
  return (
    <div className="min-h-screen bg-ice py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-midnight mb-6">The ColdRoute Platform</h1>
        <p className="text-slate mb-8 leading-relaxed">
          A multi-party cold-chain evidence and excursion review platform for
          pharmaceutical and regulated logistics.
        </p>
        <div className="space-y-6">
          {[ 'Shipment registration', 'Participant invitation', 'Sensor registration', 'Temperature policy configuration', 'Observation ingestion', 'Excursion detection', 'Partner acknowledgement', 'Evidence review', 'Quality disposition', 'Final evidence report' ].map((f, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-white rounded border border-coldroute">
              <span className="w-6 h-6 rounded-full bg-deepblue text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span className="text-midnight">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
