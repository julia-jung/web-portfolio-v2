import Link from 'next/link';
import WorkCard from './WorkCard';
import { Section } from '@/components/ui';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <Section title="WORK EXPERIENCE" id="experience">
      {experiences.map((experience) => (
        <Link key={experience.id} target="_blank" rel="noreferrer noopener" href={experience.link}>
          <WorkCard {...experience} />
        </Link>
      ))}
      <Link href="docs/cv_minjijung.pdf" target="_blank" rel="noreferrer noopener">
        <div className="group flex items-center gap-1 p-4 font-semibold">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-lg text-transparent transition duration-500 ease-out after:block after:border-violet-400 hover:after:border-b-2">
            Check out my CV for details
          </span>
        </div>
      </Link>
    </Section>
  );
}
