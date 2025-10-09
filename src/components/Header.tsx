"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AiOutlineWhatsApp, AiOutlineSend } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import Link from "next/link";

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        { label: "Проекты", href: "/projects" },
        { label: "Услуги", href: "/services" },
        { label: "Контакты", href: "/contacts" },
        { label: "О нас", href: "/about" },
    ];

    return (
        <header className="fixed top-4 left-0 w-full z-50">
            <div className="mx-auto max-w-[1600px] px-4 md:px-8">
                <div className="bg-white/40 backdrop-blur-md border border-gray-200 rounded-3xl">
                    <div className="flex items-center justify-between px-6 py-2">
                        {/* Логотип */}
                        <Link href="/">
                            <img
                                src="/logo_sc1.png"
                                alt="Логотип"
                                className="md:h-10 h-8 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                            />
                        </Link>

                        {/* Меню для ПК */}
                        <nav className="hidden md:flex items-center space-x-8 text-xl text-gray-700">
                            {menuItems.map((item, idx) => (
                                <Link key={idx} href={item.href}>
                                    <span className="relative group px-1 py-1 cursor-pointer hover:text-[#B49C6C] transition">
                                        {item.label}
                                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#B49C6C] group-hover:w-full transition-all duration-300"></span>
                                    </span>
                                </Link>
                            ))}
                        </nav>

                        {/* Иконки справа */}
                        <div className="hidden md:flex items-center gap-4">
                            <a
                                href="https://t.me/yourchannel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B49C6C] hover:text-black transition text-3xl"
                            >
                                <SiTelegram />
                            </a>
                            <a
                                href="https://wa.me/yourphone"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B49C6C] hover:text-black transition text-3xl"
                            >
                                <AiOutlineWhatsApp />
                            </a>
                        </div>

                        {/* Кнопка бургер меню */}
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
                    {mobileOpen && (
                        <div className="md:hidden border-t border-gray-200 bg-white/40 backdrop-blur-md rounded-b-xl shadow-lg">
                            <nav className="flex flex-col items-center gap-4 py-6 font-semibold text-gray-700">
                                {menuItems.map((item, idx) => (
                                    <Link key={idx} href={item.href} onClick={() => setMobileOpen(false)}>
                                        <span className="hover:text-[#B49C6C] transition cursor-pointer">
                                            {item.label}
                                        </span>
                                    </Link>
                                ))}
                                <div className="flex gap-4 mt-4">
                                    <a
                                        href="https://t.me/yourchannel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#B49C6C] text-2xl hover:text-black transition"
                                    >
                                        <AiOutlineSend />
                                    </a>
                                    <a
                                        href="https://wa.me/yourphone"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#B49C6C] text-2xl hover:text-black transition"
                                    >
                                        <AiOutlineWhatsApp />
                                    </a>
                                </div>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
