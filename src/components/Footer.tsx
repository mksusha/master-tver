"use client";

import { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const [servicesOpen, setServicesOpen] = useState(false);

    const services = [
        { title: "Дизайн интерьера", link: "/design" },
        { title: "Комплексный ремонт", link: "/renovation" },
        { title: "Авторский надзор", link: "/supervision" },
        { title: "Комплектация объекта", link: "/furnishing" },
    ];

    return (
        <footer className="mt-24 px-4 md:px-8">
            <div className="max-w-[1600px] mx-auto bg-secondary rounded-t-3xl shadow-sm overflow-hidden">
                {/* Верхняя часть футера */}
                <div className="flex flex-col items-center md:flex-row md:justify-between px-6 md:px-12 py-6 border-b border-gray-200">
                    {/* Логотип */}
                    <div className="flex items-center justify-center w-full md:w-auto mb-4 md:mb-0">
                        <img
                            src="/logo_sc1.png"
                            alt="Гермес — ремонт и дизайн интерьера в Твери"
                            className="h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Навигация */}
                    <nav className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6 text-base md:text-lg font-medium text-gray-700 w-full md:w-auto">
                        {/* Десктоп - услуги с ховером */}
                        <div className="relative group hidden md:inline-block cursor-pointer">
                            <span className="flex items-center gap-1 hover:text-[#B49C6C] transition">
                                Услуги <ChevronDown size={16} />
                            </span>
                            <div className="absolute top-full left-0 mt-2 bg-white rounded-3xl shadow-2xl py-4 px-4 flex flex-col gap-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                {services.map((srv, i) => (
                                    <Link
                                        key={i}
                                        href={srv.link}
                                        className="text-gray-700 hover:text-[#B49C6C] transition text-base"
                                    >
                                        {srv.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Мобильные - услуги с кликом */}
                        <div className="md:hidden w-full flex flex-col items-center">
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition text-gray-700 font-medium"
                            >
                                Услуги
                                {servicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    servicesOpen ? "max-h-60 mt-2" : "max-h-0"
                                }`}
                            >
                                <div className="flex flex-col gap-2 px-4 items-center">
                                    {services.map((srv, i) => (
                                        <Link
                                            key={i}
                                            href={srv.link}
                                            onClick={() => setServicesOpen(false)}
                                            className="text-gray-700 hover:text-[#B49C6C] transition text-base"
                                        >
                                            {srv.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="/contacts" className="hover:text-[#B49C6C] transition">
                            Контакты
                        </Link>
                        <Link href="/about" className="hover:text-[#B49C6C] transition">
                            О нас
                        </Link>
                    </nav>

                    {/* Соцсети */}
                    <div className="flex items-center justify-center gap-4 mt-4 md:mt-0">
                        <a
                            href="https://t.me/yourchannel"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram канал Гермес"
                            className="text-[#B49C6C] hover:text-black transition text-3xl"
                        >
                            <SiTelegram />
                        </a>
                        <a
                            href="https://wa.me/79991508400"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp Гермес"
                            className="text-[#B49C6C] hover:text-black transition text-3xl"
                        >
                            <AiOutlineWhatsApp />
                        </a>
                    </div>
                </div>

                {/* Нижняя часть футера */}
                <div className="px-6 md:px-12 py-8 text-center md:text-left text-gray-700">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-base font-medium text-gray-800">
                                8 (999) 150-84-00
                            </p>
                            <p className="text-base text-gray-800 mt-1">
                                germesprostroy@mail.ru
                            </p>
                            <p className="text-base text-gray-800 mt-1">
                                г. Тверь, Спортивный переулок, 1А, корп. 1
                            </p>
                        </div>

                        <p className="text-base text-gray-600 max-w-[500px] leading-relaxed text-center md:text-right">
                            Полный комплекс услуг: дизайн-проект, ремонт премиум-класса, авторский надзор, комплектация материалами и организация строительных работ.
                        </p>
                    </div>

                    {/* Нижняя линия */}
                    <div className="border-t border-gray-200 mt-6 pt-4 text-sm text-gray-500 text-center">
                        © {new Date().getFullYear()} Гермес. Все права защищены.
                    </div>
                </div>
            </div>
        </footer>
    );
}
