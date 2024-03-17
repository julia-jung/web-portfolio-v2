import Link from 'next/link';
import { GithubIcon, LinkedInIcon, MailIcon } from '../icons';

export default function Contacts() {
  const socialLinks = [
    { name: 'Github link icon', href: 'https://github.com/julia-jung', icon: <GithubIcon /> },
    { name: 'LinkedIn link icon', href: 'https://www.linkedin.com/in/minjijuliajung/', icon: <LinkedInIcon /> },
    { name: 'Mail link icon', href: 'mailto:minji6654@gmail.com', icon: <MailIcon /> },
  ];

  return (
    <ul className="flex flex-1 grow items-end justify-end space-x-5">
      {socialLinks.map((link) => (
        <li className="relative size-6 md:size-8" key={link.name}>
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            <div className="size-6 transition duration-300 ease-out hover:-translate-y-1">{link.icon}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
