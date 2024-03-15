'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { useHash } from '@/hooks';

export default function Nav() {
  const navs = [
    { id: 'about', name: 'About' },
    { id: 'experiences', name: 'Work Experiences' },
    { id: 'projects', name: 'Projects' },
  ];

  const hash = useHash();

  return (
    <div className="mb-3 hidden md:block">
      <ul className="space-y-1 md:space-y-3">
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link href={`#${nav.id}`} className="group flex items-center">
              <span
                className={clsx('mr-2 h-px group-hover:w-8 group-hover:bg-white', {
                  'w-8 bg-white': nav.id === hash,
                  'bg-neutral w-4': nav.id !== hash,
                })}
              />
              <span
                className={clsx(' group-hover:text-white', {
                  'text-white': nav.id === hash,
                  'text-neutral/50': nav.id !== hash,
                })}
              >
                {nav.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
