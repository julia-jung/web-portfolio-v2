// import Link from 'next/link';
import { Section, ProjectCard } from '../ui';
import { projects } from '@/lib/data';
// import { ArrowUpRightIcon } from '../icons';

export default function Projects() {
  return (
    <Section title="PROJECTS" id="projects">
      {projects.map((project) => (
        <div key={project.id}>
          <ProjectCard {...project} />
        </div>
      ))}
    </Section>
  );
}
