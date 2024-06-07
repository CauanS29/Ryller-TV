import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlue: '#002A60',
        mainGray: {
          DEFAULT: '#27272B',
          48: 'rgba(39, 39, 43, 0.48)',
        },
      }
    },
  },
  plugins: [],
};
export default config;
