import Image from 'next/image';
import { Nav, Contacts } from '../ui';

export default function Profile() {
  return (
    <div className="flex min-h-80 flex-row justify-around px-6 py-12 md:h-full md:flex-col md:justify-normal md:p-12">
      <p className="mb-8 hidden text-2xl font-bold md:block lg:text-4xl">Hi, I am</p>
      <div className="relative mr-8 size-32 shrink-0 md:mb-8 md:mr-0 md:size-48 lg:size-72">
        <div className="bg-point-blue absolute -top-2 z-20 size-8 rounded-full md:-top-0 md:size-12 lg:size-16"></div>
        <Image
          className="ring-point-blue ring-offset-brown-light relative z-10 max-h-full w-full overflow-hidden rounded-full object-none ring-4 ring-offset-4 hover:ring-offset-8"
          src="/images/profile.png"
          width={300}
          height={300}
          alt="My profile image"
        />
        <div className="bg-brown-dark absolute -right-6 bottom-0 z-0 size-12 rounded-full md:-right-9 md:size-20 lg:size-28"></div>
      </div>
      <div className="flex min-h-full flex-col md:h-full md:min-h-0">
        <p className="mb-3 text-xl font-bold md:hidden">Hi, I am</p>
        <p className="mb-3 text-2xl font-bold md:mb-5 md:text-3xl lg:text-5xl">Minji Jung</p>
        <p className="text-point-blue mb-3 font-bold md:text-xl lg:text-2xl ">Full Stack Engineer</p>
        <p className="text-point-blue mb-3 text-xs italic md:mb-5 md:text-sm lg:text-base">
          From Concept to Code, Prioritizing User Delight and Functional Excellence
        </p>
        <Nav />
        <Contacts />
      </div>
    </div>
  );
}
