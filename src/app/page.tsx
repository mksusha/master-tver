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

export default function Home() {
    return (
        <>
            <Header />
            <RepairHero />
            <ServicesSection />
            <OffersSection></OffersSection>
            <ReviewsSection></ReviewsSection>

            <ProjectsSection></ProjectsSection>

            <TariffsSection></TariffsSection>

            <StatsSection></StatsSection>
           <MapSection/>

            <FAQSection/>
            <ContactSection/>
            <Footer></Footer>

        </>
    );
}
