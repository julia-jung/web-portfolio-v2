import Link from 'next/link';
import { Section, WorkCard } from '../ui';
import { experiences } from '@/lib/data';
import { ArrowUpRightIcon } from '../icons';

export default function Experiences() {
  return (
    <Section title="Work Experiences" id="experiences">
      {experiences.map((experience) => (
        <Link key={experience.id} target="_blank" rel="noreferrer noopener" href={`${experience.link}`}>
          <WorkCard {...experience} />
        </Link>
      ))}
      <Link href="docs/cv_minjijung.pdf" target="_blank" rel="noreferrer noopener">
        <div className="group flex gap-1 p-4 font-semibold">
          <span className="group-hover:text-point-blue">View Full CV</span>
          <ArrowUpRightIcon />
        </div>
      </Link>
    </Section>
  );
}
