import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        blue: "#0500FF",
        black: "#1C1C1C",
        lightGray: "#DFDFDF",
        mediumGray: "#9E9E9E"
      }
    },
  },
  plugins: [],
} satisfies Config;
