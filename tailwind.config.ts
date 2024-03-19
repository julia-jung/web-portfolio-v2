import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s ease-in-out',
        'spin-out': 'spin-out 5s ease-in-out',
        'text-shine': 'text-shine 5s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
