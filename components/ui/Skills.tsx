import { sourceCodePro } from '@/lib/fonts';

interface SkillsProp {
  skills: string[];
}

export default function Skills({ skills }: SkillsProp) {
  return (
    <ul className={`${sourceCodePro.className} flex flex-wrap items-center gap-2 text-sm`}>
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-xs text-sky-600 transition duration-300 ease-in group-hover:bg-sky-100"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
