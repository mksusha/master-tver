import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import AboutFirm from "@/components/AboutFirm";
import ProjectsSection from "@/components/ProjectsSection";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";

export default function AboutPage() {
    return (
        <>
            {/* SEO для страницы "О нас" */}
            <SEO
                title="О компании Гермес — Ремонт и дизайн интерьера в Твери"
                description="Мы создаем стильные и качественные решения в строительстве и дизайне интерьеров, ориентируясь на ваш вкус и комфорт."
                url="https://master-tver.vercel.app/about"
                image="https://master-tver.vercel.app/about.jpg"
            />

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
