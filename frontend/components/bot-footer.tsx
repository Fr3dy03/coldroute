import { Wordmark, ProductIcon } from './wordmark';

'use client';

export function BOTFooter() {
  return (
    <footer className="bg-midnight text-white py-10 border-t border-coldroute/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-coldroute/30 mb-8">
          <div className="flex items-center gap-3">
            <ProductIcon className="w-6 h-6" />
            <Wordmark size="sm" className="text-white" />
          </div>
          <div className="text-sm text-iceblue/80">
            Built on <a href="https://www.botchain.ai/en/" className="text-teal hover:underline">BOT Chain</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-iceblue/70">
          <div className="flex gap-6">
            <a href="https://www.botchain.ai/en/" className="hover:text-white transition">BOT Chain</a>
            <a href="https://scan.botchain.ai/" className="hover:text-white transition">Explorer</a>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <a href="/security" className="hover:text-white transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
