'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between text-2xl">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Bolognese 🍝
        </Link>
      </div>
    </header>
  );
}
