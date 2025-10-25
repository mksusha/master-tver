"use client";

import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ContactSection() {
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
        <section
            aria-label="Контакты компании Гермес"
            className="mt-24 mb-24 flex justify-center px-4 md:px-8"
        >
            <div className="relative w-full max-w-[1600px] bg-white rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                {/* Левая часть — фото */}
                <div className="relative h-[400px] md:h-auto">
                    <Image
                        src="/first-blok19.jpg"
                        alt="Офис компании Гермес"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>

                {/* Правая часть — контакты */}
                <div className="flex flex-col justify-center bg-secondary p-8 md:p-12">
                    <div className="flex flex-col gap-3 mb-6">
                        <h2 className="text-3xl md:text-4xl text-gray-900">Свяжитесь с нами</h2>
                        <p className="text-gray-600 text-base">
                            Ответим на все вопросы и поможем рассчитать стоимость вашего проекта
                        </p>
                    </div>

                    {/* Контакты */}
                    <address className="flex flex-col gap-3 mb-6 not-italic">
                        <div className="flex items-center gap-3 text-lg text-gray-800">
                            <Phone className="w-5 h-5 text-[#B49C6C]" />
                            <a href="tel:+79991508400" aria-label="Позвонить в Гермес" className="hover:text-[#B49C6C] transition">
                                +7 (999) 150-84-00
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-lg text-gray-800">
                            <Mail className="w-5 h-5 text-[#B49C6C]" />
                            <a href="mailto:germesprostroy@mail.ru" aria-label="Написать на почту Гермес" className="hover:text-[#B49C6C] transition">
                                germesprostroy@mail.ru
                            </a>
                        </div>

                        {/* Соцсети */}
                        <div className="flex items-center gap-4 mt-2">
                            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-[#0088cc] transition" aria-label="Telegram канал Гермес">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="text-brand w-6 h-6" fill="currentColor">
                                    <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zM174.2 82.4l-20.3 96c-1.5 6.8-5.5 8.4-11.2 5.2l-31-22.9-15 14.4c-1.7 1.7-3.1 3.1-6.3 3.1l2.3-32.4 59.1-53.3c2.6-2.3-0.6-3.7-4-1.4l-73 46-31.4-9.8c-6.8-2.1-6.9-6.8 1.4-10.1l122.8-47.4c5.6-2.1 10.5 1.4 8.7 10.1z"/>
                                </svg>
                                <span>Telegram</span>
                            </a>
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-[#25D366] transition" aria-label="WhatsApp Гермес">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="text-brand w-6 h-6" fill="currentColor">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 104.8 32 8 128.8 8 247.9c0 43.9 11.5 86.6 33.5 124.2L0 480l112.4-40.8c35.2 19.2 74.7 29.2 115.6 29.2h.1c119 0 215.9-96.8 215.9-215.9 0-59.3-23.1-115.1-65.1-157.1zM223.9 438.4c-36.7 0-72.7-9.8-104.1-28.3l-7.4-4.4-66.7 24.2L69.9 356l-4.8-7.9C47 314.3 36.8 281.6 36.8 247.9c0-103.2 84-187.2 187.2-187.2 50 0 97 19.5 132.3 54.8 35.3 35.3 54.8 82.3 54.8 132.3-.1 103.1-84.1 187.1-187.2 187.1zm101-138.2c-5.5-2.8-32.5-16.1-37.6-17.9-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 17.9-17.5 21.6c-3.2 3.7-6.4 4.2-11.9 1.4-5.5-2.8-23.1-8.5-43.9-27.2-16.2-14.4-27.2-32.2-30.4-37.7-3.2-5.5-.3-8.5 2.4-11.3 2.5-2.5 5.5-6.4 8.3-9.6 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.2s19.9 53.6 22.7 57.3c2.8 3.7 39.1 59.7 94.8 83.7 13.2 5.7 23.5 9.1 31.5 11.7 13.2 4.2 25.2 3.6 34.6 2.2 10.6-1.6 32.5-13.3 37.1-26.2 4.6-12.9 4.6-24 3.2-26.2-1.3-2.2-5-3.6-10.5-6.4z"/>
                                </svg>
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </address>

                    {/* Форма */}
                    <div className="min-h-[58px]">
                        {success ? (
                            <p className="text-center text-gray-900 text-lg font-medium py-3 rounded-2xl border border-gray-200 bg-white/70">
                                Заявка отправлена, мы свяжемся с вами в ближайшее время
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">

                                <label className="sr-only" htmlFor="phone">Телефон</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="Телефон"
                                    inputMode="numeric"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    className="flex-1 px-4 py-3 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-[#B49C6C] outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#B49C6C] to-[#ccb689] text-white font-medium hover:opacity-90 transition flex-shrink-0 w-[180px] text-center"
                                >
                                    {loading ? "Отправка..." : "Заказать звонок"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
