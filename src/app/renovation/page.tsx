import ServiceHero from "@/components/ServiceHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RenovationStages from "@/components/RenovationStages";
import RenovationFeatures from "@/components/RenovationFeatures";
import RepairGallery from "@/components/RepairGallery";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function RepairPage() {
    return (
        <>
            <Header />
            <ServiceHero
                title="Комплексный ремонт"
                description="Полный цикл ремонтных работ — от черновых до финишной отделки, с контролем сроков и качества."
                image="/proj2.jpg"
            />

            <RenovationFeatures></RenovationFeatures>
            <RepairGallery></RepairGallery>
            <RenovationStages></RenovationStages>
            <MapSection/>

            <FAQSection/>
            <ContactSection/>
            <Footer />
        </>
    );
}
