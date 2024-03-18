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
        'spin-medium': 'spin 2s ease-in-out',
        'spin-slow': 'spin 3s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
