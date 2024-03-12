import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          light: '#874a33',
          DEFAULT: '#542f20',
          dark: '#47281B',
        },
        'point-blue': '#36bcff',
        'gray': '#3b3b3b',
        // 'neutral': '#f5f3f0',
      },
    },
  },
  plugins: [],
};
export default config;
