import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/img/jordan.png')",
      },
      colors: {
        "dark-10": "#F3F7FF",
        "dark-20": "#7CA2F4",
        "dark-30": "#f2f2ef",
      },
    },
  },
  plugins: [],
};
export default config;
