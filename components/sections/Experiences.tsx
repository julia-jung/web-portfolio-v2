import { about } from '@/lib/data';
import { Section } from '../ui';

export default function Experiences() {
  return (
    <Section title="Work Experiences" id="experiences">
      {about.map((pharagraph, index) => (
        <p key={index}>{pharagraph}</p>
      ))}
    </Section>
  );
}
