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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-image": "url('/Images/bg-1.jpg')",
        // "contact-us-image": "url('/images/contact-us.webp')",
        // "about-us-image": "url('/images/about-us.webp')",
        // "job-image": "url('/images/job.webp')",
        // "honors-image": "url('/images/honors.webp')",
        // "statistics-image": "url('/images/statistics.webp')",
        // "work-plans-image": "url('/images/work-plans.webp')",
        // "footer-image": "url('/images/footer-bg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
