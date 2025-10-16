import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageSection from "@/components/ContactPageSection";
import RepairGallerySimple from "@/components/RepairGallerySimple";

export const metadata = {
    title: "Контакты Гермес — Ремонт квартир в Твери",
    description:
        "Адрес, телефон и e-mail компании Гермес в Твери. Свяжитесь с нами для заказа ремонта.",
    openGraph: {
        title: "Контакты Гермес — Ремонт квартир в Твери",
        description:
            "Адрес, телефон и e-mail компании Гермес в Твери. Свяжитесь с нами для заказа ремонта.",
        url: "https://master-tver.vercel.app/contacts",
    },
};

export default function ContactsPage() {
    return (
        <>
            <Header />
            <ContactPageSection />
            <RepairGallerySimple />
            <Footer />
        </>
    );
}
