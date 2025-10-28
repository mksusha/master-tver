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
            "addressCountry": "RU",
        },
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

        {/* ✅ Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
            {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=104903919', 'ym');

            ym(104903919, 'init', {
              defer: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>

        {/* noscript для Метрики */}
        <noscript>
            <div>
                <img
                    src="https://mc.yandex.ru/watch/104903919"
                    style={{ position: "absolute", left: "-9999px" }}
                    alt=""
                />
            </div>
        </noscript>

        {/* Schema.org микроразметка */}
        <Script
            id="schema-org"
            strategy="afterInteractive"
            type="application/ld+json"
        >
            {JSON.stringify(organizationSchema)}
        </Script>

        {children}
        </body>
        </html>
    );
}
