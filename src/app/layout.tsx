import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ремонт квартир в Твери",
    description: "Качественный ремонт под ключ",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className="font-sans antialiased">
        {children}
        </body>
        </html>
    );
}
