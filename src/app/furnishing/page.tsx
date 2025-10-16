import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import CompletionSection from "@/components/CompletionSection";
import FurnishingProcess from "@/components/FurnishingProcess";
import ProjectsSection from "@/components/ProjectsSection";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import Script from "next/script";

export default function EquipmentPage() {
        const schemaService = {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Комплектация объекта",
                "description": "Подбираем и поставляем мебель, освещение, сантехнику и декор — создаём готовое пространство под ключ.",
                "provider": {
                        "@type": "Organization",
                        "name": "Гермес",
                        "url": "https://master-tver.vercel.app"
                },
                "areaServed": {
                        "@type": "City",
                        "name": "Тверь"
                }
        };

        return (
            <>
                    <SEO
                        title="Комплектация объекта в Твери — Гермес"
                        description="Подбираем и поставляем мебель, освещение, сантехнику и декор — создаём готовое пространство под ключ."
                        url="https://master-tver.vercel.app/furnishing"
                        image="https://master-tver.vercel.app/stats1.jpg"
                    />

                    <Script
                        id="schema-service-furnishing"
                        type="application/ld+json"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
                    />

                    <Header />
                    <ServiceHero
                        title="Комплектация объекта"
                        description="Подбираем и поставляем мебель, освещение, сантехнику и декор — создаём готовое пространство под ключ."
                        image="/stats1.jpg"
                    />
                    <FurnishingProcess />
                    <CompletionSection />
                    <ProjectsSection />
                    <MapSection />
                    <FAQSection />
                    <ContactSection />
                    <Footer />
            </>
        );
}
