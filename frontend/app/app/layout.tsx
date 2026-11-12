import { Sidebar } from '@/components/sidebar';
import { DashboardHeader } from '@/components/dashboard-header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ice">
      <Sidebar />
      <div className="md:pl-64">
        {children}
      </div>
    </div>
  );
}
