import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import DesignVideos from "@/components/DesignVideos";
import DesignSteps from "@/components/DesignSteps";
import ProjectStages from "@/components/ProjectStages";
import ProjectsSection from "@/components/ProjectsSection";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";
import Script from "next/script";

export default function DesignPage() {
        return (
            <>
                    <SEO
                        title="Дизайн интерьера в Твери — Гермес"
                        description="Разрабатываем стильные и функциональные интерьеры, отражающие ваш вкус и образ жизни. Индивидуальные дизайн-проекты под ключ."
                        url="https://master-tver.vercel.app/design"
                        image="https://master-tver.vercel.app/stats.jpg"
                    />

                    <Script
                        id="schema-service-design"
                        type="application/ld+json"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "Service",
                                        "name": "Дизайн интерьера",
                                        "description": "Разрабатываем стильные и функциональные интерьеры, отражающие ваш вкус и образ жизни.",
                                        "provider": {
                                                "@type": "Organization",
                                                "name": "Гермес",
                                                "url": "https://master-tver.vercel.app"
                                        },
                                        "areaServed": {
                                                "@type": "City",
                                                "name": "Тверь"
                                        }
                                })
                        }}
                    />

                    <Header />
                    <ServiceHero
                        title="Дизайн интерьера"
                        description="Разрабатываем стильные и функциональные интерьеры, отражающие ваш вкус и образ жизни."
                        image="/stats.jpg"
                    />
                    <DesignVideos />
                    <DesignSteps />
                    <ProjectStages />
                    <ProjectsSection />
                    <MapSection />
                    <FAQSection />
                    <ContactSection />
                    <Footer />
            </>
        );
}
