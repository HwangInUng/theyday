/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // src 미사용 시 대상 디렉토리를 명시
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // src 디렉토리 사용 시
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
