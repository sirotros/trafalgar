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
        primary: "#458FF6",
        darkPrimary: "#233348",
        gray: "#7D7987",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
export default config;
