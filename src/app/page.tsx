import Header from "@/components/Header";
import RepairHero from "@/components/RepairHero";
import ServicesSection from "@/components/ServicesSection";
import OffersSection from "@/components/OffersSection";
import MapSection from "@/components/MapSection";

export default function Home() {
    return (
        <>
            <Header />
            <RepairHero />
            <ServicesSection />
            <OffersSection></OffersSection>
           <MapSection/>

        </>
    );
}
