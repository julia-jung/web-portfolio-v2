import Image from 'next/image';
import { Nav, Contacts } from '../ui';
import { sourceCodePro } from '@/lib/fonts';

export default function Profile() {
  return (
    <div className="flex min-h-80 flex-row justify-around px-6 py-12 md:h-full md:flex-col md:justify-normal md:p-12">
      <p className={`${sourceCodePro.className} mb-8 hidden text-2xl font-bold md:block lg:text-4xl`}>Hi, I am</p>
      <div className="group relative mr-8 size-32 shrink-0 md:mb-8 md:mr-0 md:size-48 lg:size-72">
        <div className="group-hover:animate-spin-medium absolute -top-2 z-20 h-full w-full md:top-0">
          <div className="size-8 rounded-full bg-sky-400 md:size-12 lg:size-16" />
        </div>
        <Image
          className="relative z-10 rounded-full object-cover ring-4 ring-violet-500 ring-offset-4 ring-offset-zinc-800 group-hover:ring-offset-8"
          src="/images/profile.png"
          fill={true}
          alt="My profile image"
        />
        <div className="group-hover:animate-spin-medium absolute top-0 z-0 h-full w-full">
          <div className="absolute -bottom-4 right-0 size-12 rounded-full bg-zinc-900 md:size-20 lg:size-28"></div>
        </div>
      </div>
      <div className="flex min-h-full flex-col md:h-full md:min-h-0">
        <p className={`${sourceCodePro.className} mb-3 text-xl font-bold md:hidden`}>Hi, I am</p>
        <p className={`${sourceCodePro.className} mb-3 text-2xl font-bold md:mb-5 md:text-3xl lg:text-5xl`}>
          Minji Jung
        </p>
        <p className="mb-3 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text font-bold text-transparent md:text-xl lg:text-2xl ">
          Full Stack Software Engineer
        </p>
        <p className="mb-3 text-xs italic text-sky-400 md:mb-5 md:text-sm lg:text-base">
          From Concept to Code, Prioritizing User Delight and Functional Excellence
        </p>
        <Nav />
        <Contacts />
      </div>
    </div>
  );
}
