/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,vue}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],

    daisyui: {
        styled: true,
        themes: [
            {
                mytheme: {
                    "primary": "#343232",
                    "secondary": "#343232",
                    "accent": "#343232",
                    "neutral": "#272626",
                    "base-100": "#000000",
                    "info": "#0000FF",
                    "success": "#008000",
                    "warning": "#FFFF00",
                    "error": "#FF0000",
                },
            },
        ],
    }
}
