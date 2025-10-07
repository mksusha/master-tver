import localFont from "next/font/local";

export const jost = localFont({
    src: [
        {
            path: "../../public/fonts/Jost-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Jost-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Jost-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-jost",
});
