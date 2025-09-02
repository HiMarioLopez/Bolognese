'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between text-2xl">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <span className="text-rose-400 underline decoration-rose-400 decoration-dotted decoration-2 underline-offset-3 dark:text-rose-300 dark:decoration-rose-300">
            B
          </span>
          o
          <span className="text-rose-400 underline decoration-rose-400 decoration-dotted decoration-2 underline-offset-3 dark:text-rose-300 dark:decoration-rose-300">
            log
          </span>
          nese 🍝
        </Link>
      </div>
    </header>
  );
}
