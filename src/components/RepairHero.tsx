"use client";

import { useState } from "react";
import Link from "next/link";

export default function RepairHero() {
    const images = ["/ex1.webp", "/ex2.webp", "/ex3.webp", "/ex4.webp"];

    const features = [
        { svg: "/pencil.svg", title: "Современный дизайн", subtitle: "индивидуальные проекты" },
        { svg: "/calendar.svg", title: "Сроки под контролем", subtitle: "ремонт в оговоренные сроки" },
        { svg: "/tools.svg", title: "Опытные мастера", subtitle: "от 7 лет стажа" },

        { svg: "/quality.svg", title: "Гарантия качества", subtitle: "официальный договор" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative bg-white overflow-hidden mt-16 min-h-[auto] md:min-h-[750px]">
            {/* SVG линия как фон */}
            <img
                src="/gold-line.svg"
                alt="line"
                className="absolute bottom-0 left-0 w-full h-auto z-0 pointer-events-none select-none"
            />

            {/* Контент */}
            <div className="relative z-10 max-w-[95%] mx-auto px-4 pt-12 md:pt-24 pb-12 md:pb-32 text-center">
                <h1 className="text-3xl  sm:text-4xl md:text-6xl font-bold text-gray-900">
                    Ремонт квартир в Твери <br />
                    <span className="text-gray-900">под ключ</span>
                </h1>

                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-lg text-gray-700 max-w-2xl mx-auto">
                    Делаем ремонт квартир, домов и офисов в Твери и области. Честные цены, прозрачные сметы и квалифицированные мастера.
                </p>

                <div className="mt-6 sm:mt-8 flex justify-center gap-3">
                    <Link
                        href="/portfolio"
                        className="w-full max-w-[160px] sm:w-auto sm:max-w-none sm:px-6 py-3 rounded-3xl font-medium flex items-center justify-center gap-2
             bg-gradient-to-r from-[#B49C6C] via-[#ccb689] to-[#B49C6C]
             text-white relative overflow-hidden shadow-md
             transition-all duration-500 hover:bg-black hover:from-black hover:via-black hover:to-black"
                    >
  <span className="relative z-10 flex items-center gap-2">
    Наши работы
  </span>
                    </Link>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full max-w-[160px] sm:w-auto sm:max-w-none sm:px-6 py-3 rounded-3xl bg-white/70 backdrop-blur-md text-brand font-medium border border-brand hover:border-gray-300 hover:text-gray-800 transition"
                    >
                        Узнать стоимость
                    </button>
                </div>

                {/* Перекрывающиеся кружки с фото */}
                <div className="sm:mt-16 mt-8 mb-10 flex justify-center -space-x-3 sm:-space-x-4 relative z-10">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`relative w-24 sm:w-44 h-24 sm:h-44 rounded-full border-3 overflow-hidden border-white`}
                        >
                            <img src={img} alt={`room ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Нижние плашки */}
            <div className="relative max-w-[95%] sm:absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 pb-6 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 z-10">
                {features.map((f, idx) => (
                    <div
                        key={idx}
                        className="flex-1 sm:flex-none min-w-full sm:min-w-[220px] flex items-center gap-3 bg-secondary/40 backdrop-blur-xs px-5 sm:px-7 py-3 sm:py-4 rounded-2xl shadow-lg text-left"
                    >
                        <img src={f.svg} alt={f.title} className="w-6 sm:w-8 h-6 sm:h-8" />
                        <div>
                            <p className="font-semibold text-sm sm:text-lg text-gray-900">{f.title}</p>
                            <p className="text-gray-700 text-xs sm:text-base">{f.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Модалка */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Узнать стоимость ремонта</h2>
                        <form className="flex flex-col gap-3">
                            <input type="text" placeholder="Ваше имя" className="border rounded-lg px-3 py-2" />
                            <input type="tel" placeholder="Телефон" className="border rounded-lg px-3 py-2" />
                            <button type="submit" className="bg-brand text-white px-4 py-2 rounded-lg hover:opacity-90">
                                Отправить
                            </button>
                        </form>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="mt-4 text-sm text-gray-600 hover:text-brand"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
