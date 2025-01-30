/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#000000",
        "primary-neutral": "#404040",
        "primary-white": "#FFFFFF",
        "zinc-100": "#f4f4f5",
        "zinc-200": "#e4e4e7",
        "zinc-300": "#d4d4d8",
        "zinc-500": "#71717a",
        "zinc-800": "#27272a",
        error: "#ef4444",
      },
    },
  },
  plugins: [],
};
