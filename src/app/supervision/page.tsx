import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceSupervisionSection from "@/components/ServiceSupervisionSection";
import PriceSection from "@/components/PriceSection";
import ProjectsSection from "@/components/ProjectsSection";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Script from "next/script";

export const metadata = {
    title: "Авторский надзор в Твери — Гермес",
    description:
        "Контролируем точное исполнение дизайн-проекта, подбираем материалы и следим за качеством отделки.",
    openGraph: {
        title: "Авторский надзор в Твери — Гермес",
        description:
            "Контролируем точное исполнение дизайн-проекта, подбираем материалы и следим за качеством отделки.",
        url: "https://master-tver.vercel.app/supervision",
        images: ["https://master-tver.vercel.app/proj5.jpg"],
    },
};

export default function SupervisionPage() {
    const schemaService = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Авторский надзор",
        description:
            "Контролируем точное исполнение дизайн-проекта, подбираем материалы и следим за качеством отделки.",
        provider: {
            "@type": "Organization",
            name: "Гермес",
            url: "https://master-tver.vercel.app",
        },
        areaServed: {
            "@type": "City",
            name: "Тверь",
        },
    };

    return (
        <>
            <Script
                id="schema-service-supervision"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
            />

            <Header />
            <ServiceHero
                title="Авторский надзор"
                description="Контролируем точное исполнение дизайн-проекта, подбираем материалы и следим за качеством отделки."
                image="/proj5.jpg"
            />
            <ServiceSupervisionSection />
            <PriceSection />
            <ProjectsSection />
            <MapSection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </>
    );
}
