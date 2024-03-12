import { Profile, About, Experiences, Projects } from '@/components/sections';

export default function Home() {
  return (
    <div className="md:flex">
      <div className="bg-brown-light text-white md:sticky md:top-0 md:min-h-screen md:min-w-96 md:shrink-0">
        <Profile />
      </div>
      <div className="text-gray p-12 md:p-24">
        <About />
        <Experiences />
        <Projects />
      </div>
    </div>
  );
}
