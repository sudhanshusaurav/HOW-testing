/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  });
});
module.exports = {
  content: [
    "./App.tsx",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "4rem",
      },
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#f37321",
          light: "#eaf1ff",
          dark: "#cf480d",
          "dark-light": "rgba(67,97,238,.15)",
        },
        secondary: {
          // DEFAULT: "#805dca",
          // DEFAULT: "#2FBF71",
          DEFAULT: "#1B998B",
          // DEFAULT: "#59CD90",
          // DEFAULT: "#138A63",
          light: "#f1fdfb",
          "dark-light": "rgb(128 93 202 / 15%)",
        },
        success: {
          DEFAULT: "#00ab55",
          light: "#ddf5f0",
          "dark-light": "rgba(0,171,85,.15)",
        },
        danger: {
          DEFAULT: "#e7515a",
          light: "#fff5f5",
          "dark-light": "rgba(231,81,90,.15)",
        },
        warning: {
          DEFAULT: "#e2a03f",
          light: "#fff9ed",
          "dark-light": "rgba(226,160,63,.15)",
        },
        info: {
          DEFAULT: "#2196f3",
          light: "#e7f7ff",
          "dark-light": "rgba(33,150,243,.15)",
        },
        dark: {
          DEFAULT: "#3b3f5c",
          light: "#eaeaec",
          "dark-light": "rgba(59,63,92,.15)",
        },
        black: {
          DEFAULT: "#0e1726",
          light: "#e3e4eb",
          "dark-light": "rgba(14,23,38,.15)",
        },
        white: {
          DEFAULT: "#ffffff",
          light: "#e0e6ed",
          dark: "#888ea8",
        },
        gray: {
          DEFAULT: "#717171",
          dark: "#212529",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        archivo: "Archivo, sans-serif",
        dancing: "Dancing Script, cursive",
        decorative: "Cinzel Decorative, cursive",
        comfortaa: "Comfortaa, cursive",
        satisfy: "Satisfy",
      },
      fontSize: {
        "display-1": ["5.375rem", "8.0625rem"],
        "display-2": ["4.875rem", "7.3125rem"],
        "display-2-sm": ["3.75rem", "5rem"],
        h1: ["3rem", "4.5rem"],
        h2: ["2.5rem", "3.75rem"],
        h3: ["2rem", "3rem"],
        h4: ["1.625rem", "2.625rem"],
        h5: ["1.5rem", "2.25rem"],
        h6: ["1.25rem", "1.875rem"],
        "h1-sm": ["2.25rem", "3.375rem"],
        "h2-sm": ["2rem", "3rem"],
        "h3-sm": ["1.75rem", "2.625rem"],
        "h4-sm": ["1.5rem", "2.25rem"],
        "h5-sm": ["1.25rem", "1.875rem"],
        "h6-sm": ["1.125rem", "1.6875rem"],
        "p-lg": ["1.125rem", "1.875rem"],
        "p-md": ["1rem", "1.625rem"],
        "p-sm": ["0.875rem", "1.375rem"],
        "p-xs": ["0.75rem", "1.25rem"],
      },
      spacing: {
        4.5: "18px",
      },
      boxShadow: {
        "3xl":
          "0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)",
        xs: "0 1px 2px 0 rgba(10, 57, 79, 0.05)",
        sm: "0 1px 2px -1px rgba(10, 57, 79, 0.01), 0 1px 3px 0px rgba(10, 57, 79, 0.1)",
        md: "0 2px 4px -2px rgba(10, 57, 79, 0.1), 0 4px 6px -1px rgba(10, 57, 79, 0.1)",
        lg: "0 4px 6px -4px rgba(10, 57, 79, 0.1), 0 10px 15px -3px rgba(10, 57, 79, 0.1)",
        xl: "0 8px 10px -6px rgba(10, 57, 79, 0.1), 0 20px 25px -5px rgba(10,57, 79, 0.1)",
        "2xl": "0 25px 50px -12px rgba(10,57,79,0.25)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-invert-headings": theme("colors.white.dark"),
            "--tw-prose-invert-links": theme("colors.white.dark"),
            h1: { fontSize: "40px", marginBottom: "0.5rem", marginTop: 0 },
            h2: { fontSize: "32px", marginBottom: "0.5rem", marginTop: 0 },
            h3: { fontSize: "28px", marginBottom: "0.5rem", marginTop: 0 },
            h4: { fontSize: "24px", marginBottom: "0.5rem", marginTop: 0 },
            h5: { fontSize: "20px", marginBottom: "0.5rem", marginTop: 0 },
            h6: { fontSize: "16px", marginBottom: "0.5rem", marginTop: 0 },
            p: { marginBottom: "0.5rem" },
            li: { margin: 0 },
            img: { margin: 0 },
          },
        },
      }),

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-clip-path"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
    rotateX,
  ],
};
