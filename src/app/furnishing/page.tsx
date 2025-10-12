import ServiceHero from "@/components/ServiceHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EquipmentPage() {
    return (
        <>
            <Header />
            <ServiceHero
                title="Комплектация объекта"
                description="Подбираем и поставляем мебель, освещение, сантехнику и декор — создаём готовое пространство под ключ."
                image="/stats1.jpg"
            />
            <Footer />
        </>
    );
}
