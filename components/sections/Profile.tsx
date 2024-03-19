import Image from 'next/image';
import { Nav, Contacts } from '../ui';
import { sourceCodePro } from '@/lib/fonts';

export default function Profile() {
  return (
    <div className="min-h-content flex flex-row items-center justify-around gap-2 p-6 lg:h-full lg:flex-col lg:justify-normal lg:p-12">
      <p className={`${sourceCodePro.className} mb-8 hidden self-start text-2xl font-bold lg:block lg:text-4xl`}>
        Hi, I&apos;m
      </p>
      <div className="group relative mr-8 size-32 shrink-0 md:mb-8 md:mr-0 md:size-48 lg:size-60">
        <div className="animate-spin-out absolute -top-2 z-20 h-full w-full opacity-0 md:top-0">
          <Image
            className="size-6 rotate-180 md:size-8 lg:size-14"
            width="40"
            height="40"
            src="/imojis/airplane.png"
            alt="Airplain imoji"
          />
        </div>
        <Image
          className="relative z-10 rounded-full object-cover object-[50%_40%] ring-4 ring-violet-500 ring-offset-4 ring-offset-zinc-800 drop-shadow-[1px_1px_5px_#a78bfa] md:drop-shadow-[1px_1px_20px_#a78bfa] lg:ring-8 lg:ring-offset-8"
          src="/images/profile.jpg"
          fill={true}
          priority={true}
          sizes="100%, 100%"
          alt="My profile image"
        />
        <span className="animate-small-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
        <div className="absolute top-0 z-0 h-full w-full">
          <div className="absolute -bottom-4 right-0 size-12 rounded-full bg-zinc-900 md:size-20 lg:size-28"></div>
        </div>
      </div>
      <div className="flex min-h-full flex-col md:h-full md:min-h-0">
        <p className={`${sourceCodePro.className} mb-3 text-xl font-bold lg:hidden`}>Hi, I&apos;m</p>
        <p className={`${sourceCodePro.className} mb-3 text-2xl font-bold md:mb-5 md:text-3xl lg:text-5xl`}>
          Minji Jung
        </p>
        <p className="animate-text-shine text-shine mb-3 bg-clip-text font-bold text-transparent md:text-xl lg:text-2xl ">
          Full Stack Software Engineer
        </p>
        <p className="mb-3 text-xs italic text-sky-400 md:mb-5 md:text-sm lg:text-base">
          Crafting Awesome Digital Experiences with Flawless Execution with Attention to Detail
        </p>
        <Nav />
        <Contacts />
      </div>
    </div>
  );
}
