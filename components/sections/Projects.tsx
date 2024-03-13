import { about } from '@/lib/data';
import { Section } from '../ui';

export default function Projects() {
  return (
    <Section title="Projects" id="projects">
      {about.map((pharagraph, index) => (
        <p key={index}>{pharagraph}</p>
      ))}
    </Section>
  );
}
