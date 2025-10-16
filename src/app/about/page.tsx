import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import AboutFirm from "@/components/AboutFirm";
import ProjectsSection from "@/components/ProjectsSection";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
    title: "О компании Гермес — Ремонт и дизайн интерьера в Твери",
    description:
        "Мы создаем стильные и качественные решения в строительстве и дизайне интерьеров, ориентируясь на ваш вкус и комфорт.",
    openGraph: {
        title: "О компании Гермес — Ремонт и дизайн интерьера в Твери",
        description:
            "Мы создаем стильные и качественные решения в строительстве и дизайне интерьеров, ориентируясь на ваш вкус и комфорт.",
        url: "https://master-tver.vercel.app/about",
        images: ["https://master-tver.vercel.app/about.jpg"],
    },
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <ServiceHero
                title="О нас"
                description="Мы создаем стильные и качественные решения в строительстве и дизайне интерьеров, ориентируясь на ваш вкус и комфорт."
                image="/about.jpg"
            />
            <AboutFirm />
            <ProjectsSection />
            <MapSection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </>
    );
}
