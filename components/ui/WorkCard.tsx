import { Experience } from '@/types';
import { ArrowUpRightIcon } from '../icons';

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
    <div className="hover:bg-brown-light/10 group mb-10 flex flex-col rounded-lg p-4 transition hover:drop-shadow-2xl md:flex-row">
      <div className="mt-1 flex flex-row gap-1 md:w-28 md:shrink-0 md:flex-col">
        <span className="text-sm font-semibold md:text-base">
          {start} - {end}
        </span>
        <span className="text-gray/50 text-sm">({duration})</span>
      </div>
      <div className="">
        <div className="flex">
          <div className="flex grow flex-col">
            <p className="text-brown-dakr text-point-blue/80 group-hover:text-point-blue text-xl font-semibold md:text-2xl">
              {role}
            </p>
            <p className="text-gray/50 mt-1 text-sm md:text-base">
              {company} | {location}
            </p>
          </div>
          <div className="size-6 group-hover:size-8 md:size-8 group-hover:md:size-10">
            <ArrowUpRightIcon />
          </div>
        </div>
        <p className="mt-4">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-brown-dark/60 group-hover:bg-brown-dark/80 rounded-full px-2.5 py-1 text-xs text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
