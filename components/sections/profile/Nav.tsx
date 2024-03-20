'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { useHash } from '@/hooks';
import { sourceCodePro } from '@/lib/fonts';

export default function Nav() {
  const navs = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Work Experience' },
    { id: 'projects', name: 'Projects' },
  ];

  const hash = useHash();

  return (
    <div className={`${sourceCodePro.className} mb-3 hidden md:block`}>
      <ul className="space-y-1 md:space-y-3">
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link href={`#${nav.id}`} className="group flex items-center">
              <span
                className={clsx('mr-2 h-px transition duration-300 ease-out group-hover:w-8 group-hover:bg-white', {
                  'w-8 bg-white': nav.id === hash,
                  'w-4 bg-zinc-400': nav.id !== hash,
                })}
              />
              <span
                className={clsx('transition duration-300 ease-out group-hover:text-white', {
                  'text-white': nav.id === hash,
                  'text-zinc-400': nav.id !== hash,
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
