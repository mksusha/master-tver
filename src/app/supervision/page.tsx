import ServiceHero from "@/components/ServiceHero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SupervisionPage() {
    return (
        <>
            <Header />
            <ServiceHero
                title="Авторский надзор"
                description="Контролируем точное исполнение дизайн-проекта, подбираем материалы и следим за качеством отделки."
                image="/ex3.webp"
            />
            <Footer />
        </>
    );
}
