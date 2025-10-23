// app/page.tsx
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
import type { Metadata } from "next";
import RepairQuiz from "@/components/RepairQuiz";

// SEO для страницы
export const metadata: Metadata = {
    title: "Ремонт квартир в Твери — Гермес",
    description: "Качественный ремонт под ключ в Твери. Дизайн интерьера, комплексный ремонт, авторский надзор.",
    keywords: "ремонт квартир, дизайн интерьера, Тверь, комплексный ремонт, авторский надзор",
    alternates: {
        canonical: "https://master-tver.vercel.app/",
    },
    openGraph: {
        title: "Ремонт квартир в Твери — Гермес",
        description: "Качественный ремонт под ключ в Твери. Дизайн интерьера, комплексный ремонт, авторский надзор.",
        url: "https://master-tver.vercel.app/",
        type: "website",
        images: [
            {
                url: "https://master-tver.vercel.app/proj1.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "ru_RU",
    },
};


export default function Home() {
        return (
            <>
                    {/* Основные секции страницы */}
                    <Header />
                    <RepairHero />
                    <ServicesSection />
                    <OffersSection />
                <RepairQuiz></RepairQuiz>
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
