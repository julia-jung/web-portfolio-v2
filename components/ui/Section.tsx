import { sourceCodePro } from '@/lib/fonts';

export interface ComponentProps {
  children: React.ReactNode;
}

export interface SectionProps extends ComponentProps {
  title: string;
  id: string;
}

export default function Section({ children, title, id }: SectionProps) {
  return (
    <section id={id} className="animate-fade-in mb-48 p-12 md:min-h-screen lg:p-24">
      <p
        className={`${sourceCodePro.className} mb-6 text-2xl font-bold after:mt-3 after:block after:w-8 after:border-b-8 after:border-zinc-400 lg:mb-12 lg:text-4xl`}
      >
        {title}
      </p>
      {children}
    </section>
  );
}
