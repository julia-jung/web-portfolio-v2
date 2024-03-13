import { about } from '@/lib/data';
import { Section } from '../ui';

export default function About() {
  return (
    <Section title="About" id="about">
      {about.map((pharagraph, index) => (
        <p key={index}>{pharagraph}</p>
      ))}
    </Section>
  );
}
