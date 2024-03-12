import Link from 'next/link';
import Image from 'next/image';

export default function Profile() {
  const socialLinks = [
    { name: 'Github link icon', href: 'https://github.com/julia-jung', icon: 'icons/github.svg' },
    { name: 'LinkedIn link icon', href: 'https://www.linkedin.com/in/minjijuliajung/', icon: 'icons/linkedin.svg' },
    { name: 'Mail link icon', href: '', icon: 'icons/mail.svg' },
  ];

  return (
    <div className="flex min-h-80 flex-row justify-around px-6 py-12 md:h-full md:flex-col md:justify-normal md:p-12">
      <p className="mb-8 hidden text-5xl font-bold md:block">Hi, I am</p>
      <div className="relative mr-5 size-44 md:mb-8 md:mr-0 md:size-72">
        <Image
          className="ring-point-blue ring-offset-brown-light h-full w-full overflow-hidden rounded-full object-none ring-4 ring-offset-4 hover:ring-offset-8"
          src="/images/profile.png"
          width={300}
          height={300}
          alt="My profile image"
        />
      </div>
      <div className="flex min-h-full flex-col md:h-full md:min-h-0">
        <p className="mb-3 text-3xl font-bold md:hidden">Hi, I am</p>
        <p className="mb-3 text-3xl font-bold md:mb-5 md:text-5xl">Minji Jung</p>
        <p className="text-point-blue mb-3 font-bold md:mb-5 md:text-2xl ">Full Stack Engineer</p>
        <ul className="flex flex-1 grow items-end justify-end space-x-5">
          {socialLinks.map((link) => (
            <li className="relative size-6 md:size-8 " key={link.name}>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <Image src={link.icon} fill={true} alt={link.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
