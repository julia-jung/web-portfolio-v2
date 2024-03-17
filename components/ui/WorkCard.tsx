import { Experience } from '@/types';
import { ArrowRightIcon } from '../icons';
import { sourceCodePro } from '@/lib/fonts';

interface WorkCardProps extends Experience {}

export default function WorkCard({
  start,
  end,
  duration,
  company,
  location,
  role,
  description,
  skills,
}: WorkCardProps) {
  return (
    <div className="group mb-10 flex flex-col justify-items-stretch rounded-lg p-4 transition duration-700 hover:bg-zinc-200 hover:drop-shadow-2xl md:flex-row">
      <div className="mt-1 flex flex-row gap-1 md:w-28 md:shrink-0 md:flex-col">
        <span className="text-sm font-semibold md:text-base">
          {start} - {end}
        </span>
        <span className="text-sm text-zinc-500">({duration})</span>
      </div>
      <div className="grow">
        <div className="flex grow flex-col">
          <p className="text-xl font-semibold text-sky-500 group-hover:text-sky-400 md:text-2xl">{role}</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm text-zinc-500 md:text-base">
              {company} | {location}
            </span>
            <div className="size-4 transition ease-out group-hover:translate-x-1 md:size-5">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
        <p className="mt-4">{description}</p>
        <div className={`${sourceCodePro.className} mt-6 flex flex-wrap gap-2 text-sm`}>
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-zinc-500 px-2.5 py-1 text-xs text-white transition duration-300 ease-in group-hover:bg-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
