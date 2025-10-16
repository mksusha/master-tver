import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import RenovationStages from "@/components/RenovationStages";
import RenovationFeatures from "@/components/RenovationFeatures";
import RepairGallery from "@/components/RepairGallery";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Script from "next/script";

export const metadata = {
    title: "Комплексный ремонт в Твери — Гермес",
    description:
        "Полный цикл ремонтных работ — от черновых до финишной отделки, с контролем сроков и качества.",
    openGraph: {
        title: "Комплексный ремонт в Твери — Гермес",
        description:
            "Полный цикл ремонтных работ — от черновых до финишной отделки, с контролем сроков и качества.",
        url: "https://master-tver.vercel.app/renovation",
        images: ["https://master-tver.vercel.app/proj2.jpg"],
    },
};

export default function RepairPage() {
    const schemaService = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Комплексный ремонт",
        description:
            "Полный цикл ремонтных работ — от черновых до финишной отделки, с контролем сроков и качества.",
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
                id="schema-service-renovation"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
            />

            <Header />
            <ServiceHero
                title="Комплексный ремонт"
                description="Полный цикл ремонтных работ — от черновых до финишной отделки, с контролем сроков и качества."
                image="/proj2.jpg"
            />
            <RenovationFeatures />
            <RepairGallery />
            <RenovationStages />
            <MapSection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </>
    );
}
