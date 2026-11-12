import './globals.css';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import { Wordmark, ProductIcon } from '@/components/wordmark';
import { BOTFooter } from '@/components/bot-footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-plex-mono' });

export const metadata: Metadata = {
  title: 'ColdRoute — Trusted Cold-Chain Evidence',
  description: 'One trusted evidence trail for every cold-chain handoff.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${plexMono.className} bg-ice text-midnight min-h-screen`}>
      <body className="min-h-screen">
        <nav className="bg-white border-b border-coldroute sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ProductIcon className="w-6 h-6" />
              <Wordmark className="text-midnight" />
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate">
              <a href="/" className="text-midnight">Platform</a>
              <a href="/cold-chain-monitoring">Cold-Chain Monitoring</a>
              <a href="/shipment-evidence">Shipment Evidence</a>
              <a href="/quality-workflows">Quality Workflows</a>
              <a href="/sensor-integrations">Sensor Integrations</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="/contact" className="text-sm text-slate hover:text-deepblue">Contact</a>
              <a href="/app" className="ml-4 px-4 py-2 bg-deepblue text-white rounded text-sm font-medium hover:bg-midnight transition">Log In</a>
            </div>
          </div>
        </nav>
        <main className="flex-grow">{children}</main>
        <BOTFooter />
      </body>
    </html>
  );
}