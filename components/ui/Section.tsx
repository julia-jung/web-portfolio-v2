export interface ComponentProps {
  children: React.ReactNode;
}

export interface SectionProps extends ComponentProps {
  title: string;
  id: string;
}

export default function Section({ children, title, id }: SectionProps) {
  return (
    <section id={id} className="mb-48 snap-start p-12 lg:p-24">
      <p className="text-brown before:border-brown-dark mb-3 text-2xl font-bold after:mt-3 after:block after:w-8 after:border-b-8 lg:mb-5 lg:text-4xl">
        {title}
      </p>
      {children}
    </section>
  );
}
