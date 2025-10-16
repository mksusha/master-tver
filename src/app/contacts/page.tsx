import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageSection from "@/components/ContactPageSection";
import RepairGallerySimple from "@/components/RepairGallerySimple";
import SEO from "@/components/SEO";

export default function ContactsPage() {
    return (
        <>
            {/* SEO для страницы Контакты */}
            <SEO
                title="Контакты Гермес — Ремонт квартир в Твери"
                description="Адрес, телефон и e-mail компании Гермес в Твери. Свяжитесь с нами для заказа ремонта."
                url="https://master-tver.vercel.app/contacts"

            />

            <Header />
            <ContactPageSection />
            <RepairGallerySimple />
            <Footer />
        </>
    );
}
