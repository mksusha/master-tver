"use client";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-24 px-4 md:px-8">
            <div className="max-w-[1600px] mx-auto bg-secondary rounded-t-3xl shadow-sm overflow-hidden">
                {/* Верхняя часть футера */}
                <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 border-b border-gray-200">
                    {/* Логотип */}
                    <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
                        <img
                            src="/logo_sc1.png"
                            alt="Логотип"
                            className="h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Навигация */}
                    <nav className="flex flex-wrap justify-center gap-6 text-base md:text-lg font-medium text-gray-700">
                        <Link href="/projects" className="hover:text-[#B49C6C] transition">
                            Проекты
                        </Link>
                        <Link href="/services" className="hover:text-[#B49C6C] transition">
                            Услуги
                        </Link>
                        <Link href="/contacts" className="hover:text-[#B49C6C] transition">
                            Контакты
                        </Link>
                        <Link href="/about" className="hover:text-[#B49C6C] transition">
                            О нас
                        </Link>
                    </nav>

                    {/* Соцсети */}
                    <div className="flex items-center justify-center md:justify-end gap-4 mt-4 md:mt-0">
                        <a
                            href="https://t.me/yourchannel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#B49C6C] hover:text-black transition text-3xl"
                        >
                            <SiTelegram />
                        </a>
                        <a
                            href="https://wa.me/79991508400"
                            target="_blank"
                            rel="noopener noreferrer"
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
