import ServiceHero from "@/components/ServiceHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DesignPage() {
    return (
        <>
            <Header></Header>
            <ServiceHero
                title="Дизайн интерьера"
                description="Разрабатываем стильные и функциональные интерьеры, отражающие ваш вкус и образ жизни."
                image="/stats.jpg"
            />
           <Footer></Footer>
        </>
    );
}
