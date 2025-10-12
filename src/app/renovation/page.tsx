import ServiceHero from "@/components/ServiceHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RepairPage() {
    return (
        <>
            <Header />
            <ServiceHero
                title="Комплексный ремонт"
                description="Полный цикл ремонтных работ — от черновых до финишной отделки, с контролем сроков и качества."
                image="/proj2.jpg"
            />
            <Footer />
        </>
    );
}
