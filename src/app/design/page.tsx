import ServiceHero from "@/components/ServiceHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DesignSteps from "@/components/DesignSteps";
import ProjectStages from "@/components/ProjectStages";
import DesignVideos from "@/components/DesignVideos";
import MapSection from "@/components/MapSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function DesignPage() {
    return (
        <>
            <Header></Header>
            <ServiceHero
                title="Дизайн интерьера"
                description="Разрабатываем стильные и функциональные интерьеры, отражающие ваш вкус и образ жизни."
                image="/stats.jpg"
            />
            <DesignVideos></DesignVideos>
            <DesignSteps></DesignSteps>
            <ProjectStages></ProjectStages>
            <ProjectsSection></ProjectsSection>
            <MapSection/>

            <FAQSection/>
            <ContactSection/>
           <Footer></Footer>
        </>
    );
}
