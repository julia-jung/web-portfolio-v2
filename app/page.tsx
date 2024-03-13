import { Profile, About, Experiences, Projects } from '@/components/sections';

export default function Home() {
  return (
    <div className="md:flex">
      <div className="bg-brown-light text-white md:sticky md:top-0 md:max-h-screen md:max-w-sm md:shrink-0 lg:max-w-md">
        <Profile />
      </div>
      <div className="text-gray snap-y overflow-y-scroll scroll-smooth md:h-screen">
        <About />
        <Experiences />
        <Projects />
      </div>
    </div>
  );
}
