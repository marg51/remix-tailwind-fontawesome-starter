const colors = require("tailwindcss/colors")
module.exports = {
    mode: "jit",
    purge: {
        content: ["./app/**/*.{js,ts,jsx,tsx}"],
        // safelist: ["ring ring-blue-300"],
    },
    theme: {
        extend: {
            colors: {
                "brand-darkest": "#1C2227",
                transparent: "transparent",
            },
        },
        colors: colors,
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
