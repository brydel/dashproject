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
        brydelSky: "#A8D8B9", 
        brydelSkyLight: "#E6F7EB", 
        brydelPurple: "#F6A5C0", 
        brydelPurpleLight: "#FDECF1", 
        brydelYellow: "#FFD07B", 
        brydelYellowLight: "#FFF6E4", 
        brydelEvent1: "#D7E8F9", 
        brydelEvent2: "#FBE4C6",
        brydelEvent3: "#E3F1D7",
        brydelEvent4: "#FFE8E8",
        ciel: "#87CEEB",
      },
    },
  },
  plugins: [],
};
export default config;
