import { Section, ProjectCard } from '../ui';
import { projects } from '@/lib/data';

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
