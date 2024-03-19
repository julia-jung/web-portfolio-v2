import { Profile, About, Experiences, Projects } from '@/components/sections';
import { Footer } from '@/components/ui';

export default function Home() {
  return (
    <div className="flex flex-col overflow-y-scroll antialiased lg:flex-row">
      <div className="bg-gradient-to-b from-zinc-600 to-zinc-800 text-white lg:sticky lg:top-0 lg:max-h-screen lg:max-w-md lg:shrink-0">
        <Profile />
      </div>
      <div className="h-screen scroll-smooth text-zinc-900 lg:overflow-y-scroll">
        <About />
        <Experiences />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
