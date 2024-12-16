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
      },
      lineHeight: {
        'lineHeight17px': '17px',
      },
      backgroundSize: {
        '90': '90%',
        '100':'100%'
      },
      backgroundPosition: {
        
        'right-custom': 'calc(100% + 180px) center',
      },
    },
  },
  plugins: [],
};
export default config;
