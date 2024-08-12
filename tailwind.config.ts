import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("flowbite/plugin"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazir', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: '#6b7280',
          DEFAULT: '#4a97aa',
          dark: '#111827',
        },
        secondary: {
          light: '#f1f1f1',
          DEFAULT: '#fbf5eb',
          dark: '#818181',
        },
        accent: {
          light: '#d2b692',
          DEFAULT: '#ab9273',
          dark: '#806b51',
        },
        customGray: '#b0bec5',
        customRed: '#ff6347',
      },
    },
  },
};
export default config;
