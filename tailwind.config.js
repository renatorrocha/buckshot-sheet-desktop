/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                averia: ['"Averia Serif Libre"', "serif"],
            },
            textStroke: {
                1: "1px",
                2: "2px",
            },
            colors: {
                white: "#dbdbd9",
                brand: {
                    black: "#010000",
                },
            },
        },
    },
    plugins: [
        ({ addUtilities }) => {
            addUtilities({
                ".text-stroke-1": {
                    "-webkit-text-stroke": "1px #000",
                },
                ".text-stroke-2": {
                    "-webkit-text-stroke": "2px #000",
                },
            });
        },
    ],
};
