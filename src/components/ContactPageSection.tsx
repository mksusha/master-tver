"use client";

import { Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import {SiTelegram} from "react-icons/si";
import {AiOutlineWhatsApp} from "react-icons/ai";

export default function ContactPageSection() {
    const [form, setForm] = useState({ name: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "phone") {
            setForm({ ...form, phone: value.replace(/\D/g, "") });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) setSuccess(true);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!success) setForm({ name: "", phone: "" });
    }, [success]);

    return (
        <section className="mt-32 mb-20 flex justify-center px-4 md:px-8">
            <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-2">
                {/* Левая часть */}
                <div className="flex flex-col justify-between bg-brand rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-6 sm:p-8 md:p-12 shadow-sm h-full text-center md:text-left">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl text-white mb-5">
                            Контакты
                        </h2>

                        <p className="text-white border rounded-3xl py-8 sm:py-12 px-4 bg-white/15 text-lg sm:text-xl md:text-2xl my-7">
                            Приезжайте в наш офис — будем рады обсудить ваш проект лично. Мы
                            всегда вас поймем и предложим оптимальное решение.
                        </p>

                        <p className="text-white text-lg md:text-xl mb-2">
                            Тверь, Спортивный переулок, 1А, корп. 1
                        </p>
                        <p className="text-white text-base md:text-xl mb-4">
                            Заезжайте в наш офис — будем рады обсудить ваш проект лично
                        </p>

                        {/* Контакты */}
                        <div className="flex flex-col items-center md:items-start gap-3 mb-6">
                            <div className="flex items-center gap-3 text-white text-base md:text-lg">
                                <Phone className="w-5 h-5 text-white" />
                                <a
                                    href="tel:+79991508400"
                                    className="hover:text-gray-200 transition"
                                >
                                    8 (999) 150-84-00
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-white text-base md:text-lg">
                                <Mail className="w-5 h-5 text-white" />
                                <a
                                    href="mailto:germesprostroy@mail.ru"
                                    className="hover:text-gray-200 transition"
                                >
                                    germesprostroy@mail.ru
                                </a>
                            </div>


                            {/* Соцсети */}
                            <div className="flex justify-center md:justify-start gap-4 mt-3">
                                {/* Telegram */}
                                <a
                                    href="https://t.me/yourchannel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-[#0088cc] transition-colors duration-300"
                                >
                                    <SiTelegram className="w-6 h-6" />
                                    <span className="hidden sm:inline text-base">Telegram</span>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/yourphone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-[#25D366] transition-colors duration-300"
                                >
                                    <AiOutlineWhatsApp className="w-6 h-6" />
                                    <span className="hidden sm:inline text-base">WhatsApp</span>
                                </a>
                            </div>


                        </div>
                    </div>

                    {/* Форма */}
                    <div className="min-h-[58px] mt-4">
                        {success ? (
                            <p className="text-center text-white text-base py-3 rounded-2xl border border-white bg-white/10">
                                Заявка отправлена, мы свяжемся с вами в ближайшее время
                            </p>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col md:flex-row gap-3 w-full"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ваше имя"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 px-4 py-3 rounded-2xl border border-white bg-white/10 text-white placeholder-white focus:ring-2 focus:ring-[#B49C6C] outline-none"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Телефон"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 px-4 py-3 rounded-2xl border border-white bg-white/10 text-white placeholder-white focus:ring-2 focus:ring-[#B49C6C] outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`px-6 py-3 rounded-2xl border border-white w-full md:w-[180px] transition-all duration-300 ${
                                        loading
                                            ? "bg-brand text-white opacity-80 cursor-default"
                                            : "bg-brand text-white hover:bg-white hover:text-[#B49C6C]"
                                    }`}
                                >
                                    {loading ? "Отправка..." : "Заказать звонок"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Правая часть — карта */}
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-auto rounded-b-3xl md:rounded-b-none md:rounded-r-3xl overflow-hidden shadow-sm">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=35.896193%2C56.839325&mode=search&oid=199673139492&ol=biz&sll=35.896193%2C56.839325&sspn=0.010335%2C0.004043&text=%D0%B3%20%D1%82%D0%B2%D0%B5%D1%80%D1%8C%20%D1%81%D0%BA%20%D0%B3%D0%B5%D1%80%D0%BC%D0%B5%D1%81&z=16.98"
                        frameBorder="0"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
