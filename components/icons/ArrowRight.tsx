import clsx from 'clsx';

interface ArrowRightProps {
  violet?: boolean;
}

export default function ArrowRight({ violet }: ArrowRightProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={clsx('stroke-sky-400 stroke-2 ', { 'stroke-violet-400': violet })}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}
