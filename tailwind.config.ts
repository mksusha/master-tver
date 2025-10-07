import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: "#B49C6C",
                secondary: "#f8f8f8",
            },
            fontFamily: {
                sans: ["Nunito", "sans-serif"], // 👈 теперь по умолчанию Jost
            },
        },
    },
    plugins: [],
};

export default config;
