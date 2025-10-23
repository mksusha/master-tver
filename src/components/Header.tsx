"use client";

import React, { useState } from "react";
import {ChevronDown, Menu, X} from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        { label: "Контакты", href: "/contacts" },
        { label: "О нас", href: "/about" },
    ];

    const services = [
        { title: "Дизайн интерьера", link: "/design" },
        { title: "Комплексный ремонт", link: "/renovation" },
        { title: "Авторский надзор", link: "/supervision" },
        { title: "Комплектация объекта", link: "/furnishing" },
    ];

    return (
        <header className="fixed top-4 left-0 w-full z-50">
            <div className="mx-auto max-w-[1600px] px-4 md:px-8">
                <div className="bg-white/40 backdrop-blur-md border border-gray-200 rounded-3xl">
                    <div className="flex items-center justify-between px-6 py-2">
                        {/* Логотип */}
                        <Link href="/" aria-label="Главная страница Гермес — ремонт и дизайн интерьера в Твери">
                            <Image
                                src="/logo_sc1.png"
                                alt="Гермес — ремонт и дизайн интерьера в Твери"
                                width={120}
                                height={40}
                                className="md:h-12 h-8 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                                priority
                            />
                        </Link>

                        {/* Меню для ПК */}
                        <nav className="hidden md:flex items-center space-x-8 text-xl text-gray-700 relative">
                            {/* Услуги с выпадашкой */}
                            <div className="relative group cursor-pointer">
        <span className="flex items-center gap-1 relative px-1 py-1 hover:text-[#B49C6C] transition">
            Услуги
            <ChevronDown size={16} /> {/* Стрелка рядом с текстом */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#B49C6C] group-hover:w-full transition-all duration-300"></span>
        </span>
                                {/* Пустой блок для отступа под hover */}
                                <div className="absolute top-full left-0 w-full h-4"></div>
                                {/* Выпадашка */}
                                <div className="absolute top-[calc(100%+0.5rem)] -left-3 bg-white rounded-3xl shadow-2xl py-4 px-4 flex flex-col gap-3 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all duration-300 ease-out">
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

                            {/* Остальные пункты меню */}
                            {menuItems.map((item, idx) => (
                                <Link key={idx} href={item.href!}>
            <span className="relative group px-1 py-1 cursor-pointer hover:text-[#B49C6C] transition">
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#B49C6C] group-hover:w-full transition-all duration-300"></span>
            </span>
                                </Link>
                            ))}
                        </nav>


                        {/* Иконки соцсетей десктоп */}
                        <div className="hidden md:flex items-center gap-4">
                            <a
                                href="https://t.me/yourchannel"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram канал Гермес"
                                className="text-[#B49C6C] hover:opacity-90 duration-300 transition-transform hover:scale-110 text-3xl"
                            >
                                <SiTelegram />
                            </a>
                            <a
                                href="https://wa.me/yourphone"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp Гермес"
                                className="text-[#B49C6C] hover:opacity-90 transition-transform hover:scale-110 text-3xl"
                            >
                                <AiOutlineWhatsApp />
                            </a>
                        </div>

                        {/* Бургер для мобильных */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="p-2 rounded-md text-gray-700 hover:text-[#B49C6C] transition"
                                aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
                            >
                                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>

                    {/* Мобильное меню */}
                    <div
                        className={`md:hidden border-t border-gray-200 bg-white/40 backdrop-blur-md rounded-b-xl shadow-lg transition-all duration-300 ${
                            mobileOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0 overflow-hidden"
                        }`}
                    >
                        <nav className="flex flex-col items-center gap-4 font-semibold text-gray-700">
                            {services.map((srv, i) => (
                                <Link
                                    key={i}
                                    href={srv.link}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-gray-700 hover:text-[#B49C6C] transition mb-1 text-lg font-normal"
                                >
                                    {srv.title}
                                </Link>
                            ))}

                            {menuItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.href!}
                                    onClick={() => setMobileOpen(false)}
                                >
                  <span className="hover:text-[#B49C6C] transition cursor-pointer font-normal text-lg">
                    {item.label}
                  </span>
                                </Link>
                            ))}

                            {/* Соцсети мобильная версия */}
                            <div className="flex gap-4 mt-4">
                                <a
                                    href="https://t.me/yourchannel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Telegram канал Гермес"
                                    className="text-[#B49C6C] hover:text-black transition-transform hover:scale-110 text-3xl"
                                >
                                    <SiTelegram />
                                </a>
                                <a
                                    href="https://wa.me/yourphone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp Гермес"
                                    className="text-[#B49C6C] hover:text-black transition-transform hover:scale-110 text-3xl"
                                >
                                    <AiOutlineWhatsApp />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
