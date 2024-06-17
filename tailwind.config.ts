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
      },
      colors: {
        primary: '#171717', 
        secondary: '#0D0D0D', 
        accent: '#00FF00', 
        textPrimary: '#FFFFFF', 
        textSecondary: '#CCCCCC',
        cardBackground: '#1A1A1A',
      },
    },
  },
  plugins: [],
};
export default config;
