'use client';

export function DashboardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-white border-b border-coldroute sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-midnight">{title}</h1>
          {subtitle && <p className="text-slate text-sm">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-midnight text-white text-sm rounded hover:bg-deepblue transition">Create</button>
        </div>
      </div>
    </div>
  );
}
