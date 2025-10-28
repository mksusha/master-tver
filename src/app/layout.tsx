import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Ремонт квартир в Твери",
    description: "Качественный ремонт под ключ",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Гермес",
        "url": "https://master-tver.vercel.app",
        "logo": "https://master-tver.vercel.app/logo_sc1.png",
        "telephone": "8 (999) 150-84-00",
        "email": "germesprostroy@mail.ru",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Спортивный переулок, 1А, корп. 1",
            "addressLocality": "Тверь",
            "addressRegion": "Тверская область",
            "postalCode": "170000",
            "addressCountry": "RU"
        }
    };

    return (
        <html lang="ru">
        <body className="font-sans antialiased">
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9LBRG3L');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-T9LBRG3L"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            ></iframe>
        </noscript>

        {/* Google Analytics */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-ZLC657LJ5P"
            strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZLC657LJ5P');
          `}
        </Script>

        {/* Schema.org микроразметка */}
        <Script id="schema-org" strategy="afterInteractive" type="application/ld+json">
            {JSON.stringify(organizationSchema)}
        </Script>

        {children}
        </body>
        </html>
    );
}
