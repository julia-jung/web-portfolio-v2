import { Profile, About, Experiences, Projects } from '@/components/sections';
import { Footer } from '@/components/ui';

export default function Home() {
  return (
    <div className="antialiased lg:flex">
      <div className="bg-gradient-to-b from-zinc-600 to-zinc-800 text-white lg:sticky lg:top-0 lg:max-h-screen lg:max-w-md lg:shrink-0">
        <Profile />
      </div>
      <div id="root" className="snap-y overflow-y-scroll scroll-smooth text-zinc-900 lg:h-screen">
        <About />
        <Experiences />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
