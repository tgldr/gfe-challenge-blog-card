import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: '8px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgGradient1: "#F9FAFB",
        bgGradient2: "#D2D6DB",
      },
      boxShadow: {
        focus: '0px 0px 0px 4px rgba(68, 76, 231, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
