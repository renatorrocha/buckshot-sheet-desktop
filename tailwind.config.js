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
                    "dark-gray": "#252423",
                    gray: "#484948",
                    olive: {
                        700: "#4a4927",
                        500: "#6f6e4b",
                        300: "#92936f",
                    },
                    green: "#00e26e",
                    "dark-red": "#240001",
                    burgundy: "#492520",
                    taupe: "#6a4945",
                    dusty: {
                        rose: "#936c6c",
                    },
                    light: {
                        rose: "#b59392",
                    },
                    "soft-red": "#b76d6e",
                    purple: "#91486d",
                    "deep-purple": "#472246",
                    "golden-brown": "#b7936a",
                    beige: "#d8b78e",
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
