/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
        colors: {
            brand: {
            black: "#000000",
            white: "#FFFFFF",
            red: "#B92D23",
            redDark: "#8F231C",
            soft: "#F5F5F5",
            gray: "#D9D9D9",
            },
        },
        },
    },
    plugins: [],
};