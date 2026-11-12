'use client';

import { usePathname } from 'next/navigation';
import { Truck, Package, AlertTriangle, Sensor, ShieldCheck, Users, FileText, BarChart3, Settings, Link } from 'lucide-react';
import LinkComponent from 'next/link';

const navItems = [
  { name: 'Overview', href: '/app', icon: BarChart3 },
  { name: 'Shipments', href: '/app/shipments', icon: Truck },
  { name: 'Exceptions', href: '/app/exceptions', icon: AlertTriangle },
  { name: 'Sensors', href: '/app/sensors', icon: Sensor },
  { name: 'Quality Reviews', href: '/app/quality-reviews', icon: ShieldCheck },
  { name: 'Partners', href: '/app/partners', icon: Users },
  { name: 'Evidence Records', href: '/app/evidence', icon: FileText },
  { name: 'Reports', href: '/app/reports', icon: FileText },
  { name: 'Integrations', href: '/app/integrations', icon: Link },
  { name: 'Settings', href: '/app/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-coldroute bg-white h-[calc(100vh-64px)] fixed left-0 top-16 z-20">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-deepblue rounded flex items-center justify-center text-white text-xs">CR</div>
          <span className="font-bold text-midnight text-sm">ColdRoute</span>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <LinkComponent
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm rounded ${active ? 'bg-deepblue/10 text-deepblue border-r-4 border-deepblue font-medium' : 'text-slate hover:bg-ice hover:text-deepblue transition'}`
              >
                <Icon size={18} />
                {item.name}
              </LinkComponent>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
