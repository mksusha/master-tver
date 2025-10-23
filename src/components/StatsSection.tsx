"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
    { number: 11, label: "лет опыта" },
    { number: 737, label: "реализованных проектов" },
    { number: 35, label: "человек в команде" },
];

export default function AboutFirm() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        if (isInView) {
            stats.forEach((stat, i) => {
                let start = 0;
                const end = stat.number;
                const duration = 1500; // ms
                const step = Math.ceil(end / (duration / 16));

                const counter = setInterval(() => {
                    start += step;
                    if (start >= end) {
                        start = end;
                        clearInterval(counter);
                    }
                    setCounts((prev) => {
                        const updated = [...prev];
                        updated[i] = start;
                        return updated;
                    });
                }, 16);
            });
        }
    }, [isInView]);

    return (
        <section
            ref={ref}
            aria-label="О компании Гермес"
            className="w-full bg-white py-16 px-4 md:px-8"
        >
            <div className="max-w-[1600px] mx-auto">
                {/* Верхний текст */}
                <header className="mb-12 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-snug text-gray-900 max-w-full md:max-w-[1000px]">
                        <span className="text-brand font-normal">Гермес</span> — это архитектурное проектирование,
                        инженерные решения и современные технологии строительства.
                    </h2>
                    <p className="mt-4 sm:mt-6 max-w-full md:max-w-[900px] text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                        Компания «Гермес» помогает клиентам определить оптимальные конструктивные решения, учитывая
                        особенности застройки и индивидуальные предпочтения. Мы создаём эффективные и долговечные
                        проекты, применяя инновационные материалы и технологии.
                    </p>
                </header>

                {/* Контейнер с фоном и карточками */}
                <div className="relative">
                    {/* Фон за карточками */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        <Image
                            src="/stats.jpg"
                            alt="Фон с интерьером для секции о компании Гермес"
                            fill
                            className="object-cover object-center"
                        />
                        {/* Полупрозрачный слой с блюром */}
                        <div className="absolute inset-0 bg-black/20 rounded-3xl" />
                    </div>

                    {/* Анимированные карточки */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-2 sm:px-5 py-10 md:py-20 z-10">
                        {stats.map((stat, i) => (
                            <article
                                key={i}
                                className="bg-black/10 rounded-3xl px-6 sm:px-10 py-4 sm:py-8 text-center sm:text-left shadow-sm"
                                aria-label={`${stat.number} ${stat.label}`}
                            >
                                <motion.p className="text-4xl sm:text-6xl md:text-[140px] leading-none font-light text-white">
                                    {counts[i].toLocaleString("ru-RU")}
                                </motion.p>
                                <p className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-light text-white">
                                    {stat.label}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
