import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { ArrowRightIcon, ArrowUpRightIcon } from '../icons';
import Skills from './Skills';

interface ProjectCardProps extends Project {}

export default function ProjectCard({ name, description, thumbnail, stack, url, github, demo }: ProjectCardProps) {
  return (
    <div className="group mb-10 flex flex-col items-center justify-center justify-items-center gap-4 rounded-lg transition duration-700 md:mb-16 md:flex-row">
      <div className="relative mx-auto md:w-1/2">
        {url ? (
          <Link target="_blank" rel="noreferrer noopener" href={url}>
            <Image
              className="rounded-lg transition duration-500 ease-out group-hover:scale-110"
              src={thumbnail}
              width={500}
              height={500}
              alt={`Project ${name} thumbnail`}
            />
          </Link>
        ) : (
          <Image
            className="rounded-lg transition duration-500 ease-out group-hover:scale-110"
            src={thumbnail}
            width={500}
            height={500}
            alt={`Project ${name} thumbnail`}
          />
        )}
      </div>
      <div className="w-full px-8 py-4 md:w-1/2">
        <div className="flex">
          <div className="mt-1 text-xl font-semibold text-violet-500 group-hover:text-violet-400 md:text-2xl">
            {name}
            {url && (
              <div className="ml-2 inline-block size-4 transition duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 md:size-5">
                <ArrowUpRightIcon violet />
              </div>
            )}
          </div>
        </div>
        <p className="mt-4">{description}</p>
        <div className="flex">
          {(github || demo) && (
            <Link href={github ?? demo ?? ''} target="_blank" rel="noreferrer noopener">
              <div className="group/link mt-2 flex items-center gap-1 font-semibold">
                <span className="transition duration-300 ease-linear group-hover/link:bg-gradient-to-r group-hover/link:from-cyan-400 group-hover/link:to-violet-500 group-hover/link:bg-clip-text group-hover/link:text-transparent">
                  {github ? 'Github' : 'Demo'}
                </span>
                <div className="size-4 transition duration-300 ease-out group-hover/link:translate-x-1">
                  <ArrowRightIcon violet />
                </div>
              </div>
            </Link>
          )}
        </div>
        <Skills skills={stack} />
      </div>
    </div>
  );
}
