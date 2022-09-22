/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      // => @media (min-width: 300px) { ... }

      ms: "380px",
      // => @media (min-width: 380px) { ... }

      xm: "500px",
      // => @media (min-width: 500px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      mdx: "700px",
      // => @media (min-width: 700px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      short: { raw: "(max-height: 650px)" },
      // => @media (min-height: 800px) { ... }

      medium: { raw: "(max-height: 670px)" },
      // => @media (min-height: 800px) { ... }

      xmedium: { raw: "(max-height: 750px)" },
      // => @media (min-height: 800px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
