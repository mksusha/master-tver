import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import RenovationStages from "@/components/RenovationStages";
import RenovationFeatures from "@/components/RenovationFeatures";
import RepairGallery from "@/components/RepairGallery";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import Script from "next/script";

export default function RepairPage() {
        return (
            <>
                    {/* SEO для страницы Комплексный ремонт */}
                    <SEO
                        title="Комплексный ремонт в Твери — Гермес"
                        description="Полный цикл ремонтных работ — от черновых до финишной отделки, с контролем сроков и качества."
                        url="https://master-tver.vercel.app/renovation"
                        image="https://master-tver.vercel.app/proj2.jpg"
                    />

                    {/* Микроразметка Schema.org для услуги */}
                    <Script
                        id="schema-service-renovation"
                        type="application/ld+json"
                        strategy="afterInteractive"
                    >
                            {JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "Service",
                                    "name": "Комплексный ремонт",
                                    "description": "Полный цикл ремонтных работ — от черновых до финишной отделки, с контролем сроков и качества.",
                                    "provider": {
                                            "@type": "Organization",
                                            "name": "Гермес",
                                            "url": "https://master-tver.vercel.app"
                                    },
                                    "areaServed": {
                                            "@type": "City",
                                            "name": "Тверь"
                                    }
                            })}
                    </Script>

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
