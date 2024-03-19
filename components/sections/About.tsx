import { ArrowRightIcon } from '../icons';
import { Section, Skills } from '../ui';
import { skills } from '@/lib/data';

export default function About() {
  return (
    <Section title="ABOUT" id="about">
      <div>
        <div className="mb-6">
          <p className="mb-1 text-lg font-semibold">Professional software engineer based in South Korea and the UK</p>
          <p className="font-light">
            I&apos;m a person who is often <span className="font-normal text-sky-500">obsessed with details</span> and
            extremely meticulous and organized, which allows me to{' '}
            <span className="font-normal text-sky-500">excel in developing pixel-perfect interfaces</span>. In the end,
            it&apos;s all about user experience where little details make a whole lot of difference.
          </p>
        </div>
        <div className="mb-6">
          <p className="mb-1 text-lg font-semibold">Adventurous Traveler and Lifelong Learner</p>
          <p className="font-light">
            I value all kinds of experiences and enjoy learning through them, constantly developing myself. My life is
            literally <span className="font-normal text-violet-500">full of challenges with exploring the world</span> —
            I&apos;ve had the opportunity to explore over 20 countries – including throwing myself into studying in
            Russia, volunteering to teach English in Bali, traveling around Africa, and living and working in Australia.
            I&apos;m an <span className="font-normal text-violet-500">object-oriented</span> person and enjoy pushing
            myself to raise the bar, feeling <span className="font-normal text-violet-500">accomplishment</span> at
            last, which is compared to nothing.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-extralight italic">
            Now I&apos;m stepping into the next chapter of my life in the UK, and I&apos;m thrilled about working in an
            international environment with diverse people!
          </p>
        </div>
        <p className="linear font-extralight text-white transition duration-300 hover:text-zinc-900">
          😽😸 P.S. I’m a cat lover. My favorite thing in the world is hanging out with my silly little two cats.
        </p>
      </div>
      <div className="mt-8">
        <span className="inline-block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-lg text-transparent after:block after:border-b-2 after:border-violet-400">
          Skills
        </span>
        <div className="mt-6 flex flex-col items-start gap-2 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Frontend</span>
            <div className="size-4 shrink-0 rotate-90 align-middle md:rotate-0">
              <ArrowRightIcon />
            </div>
          </div>
          <Skills skills={skills.frontend} />
        </div>
        <div className="mt-6 flex flex-col items-start gap-2 md:mt-3 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Backend</span>
            <div className="size-4 shrink-0 rotate-90 align-middle md:rotate-0">
              <ArrowRightIcon />
            </div>
          </div>
          <Skills skills={skills.backend} />
        </div>
        <div className="mt-6 flex flex-col items-start gap-2 md:mt-3 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Tools</span>
            <div className="size-4 shrink-0 rotate-90 align-middle md:rotate-0">
              <ArrowRightIcon />
            </div>
          </div>
          <Skills skills={skills.tools} />
        </div>
      </div>
    </Section>
  );
}
