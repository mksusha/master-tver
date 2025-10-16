import Header from "@/components/Header";
import RepairHero from "@/components/RepairHero";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
import TariffsSection from "@/components/TariffsSection";
import StatsSection from "@/components/StatsSection";
import ProjectsSection from "@/components/ProjectsSection";

import SEO from "@/components/SEO";
import Script from "next/script";

export default function Home() {
    return (
        <>
            {/* SEO и мета-теги */}
            <SEO
                title="Ремонт квартир в Твери — Гермес"
                description="Качественный ремонт под ключ в Твери. Дизайн интерьера, комплексный ремонт, авторский надзор."
                url="https://master-tver.vercel.app/"
                image="https://master-tver.vercel.app/proj1.jpg"
            />


            {/* Основные секции страницы */}
            <Header />
            <RepairHero />
            <ServicesSection />
            <OffersSection />
            <ReviewsSection />
            <ProjectsSection />
            <TariffsSection />
            <StatsSection />
            <MapSection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </>
    );
}
