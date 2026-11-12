'use client';

export function Wordmark({ className = '', size: sz = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'text-xl', md: 'text-2xl', lg: 'text-3xl' };
  return (
    <span className={`font-mono font-bold tracking-tight text-midnight ${sizes[sz]} ${className}`}>
      Cold<span className="text-deepblue">Route</span>
    </span>
  );
}

export function ProductIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`w-8 h-8 text-midnight ${className}`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" x="2" y="2" rx="6" stroke="var(--color-midnight)" strokeWidth="2" />
      <path d="M8 10 L22 10 L22 14 L8 14 Z" stroke="var(--color-teal)" strokeWidth="2" />
      <path d="M12 16 L20 16 L20 20 L12 20 Z" stroke="var(--color-amber)" strokeWidth="2" />
      <path d="M15 8 L15 10 M17 8 L17 10" stroke="var(--color-coral)" strokeWidth="2" />
    </svg>
  );
}
