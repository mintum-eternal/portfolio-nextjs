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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#EB1616",
        secondary: "#191C24",
        light: "#6C7293",
        success: "#198754",
        danger: '#dc3545',
        warning:"#ffc107",
        info: "#0dcaf0",
        disaled: "#EBEBE4"
      },
      keyframes: {
        circle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        circle: "circle 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
