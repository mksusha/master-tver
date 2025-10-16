"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
    const services = [
        {
            title: "Дизайн интерьера",
            image: "/ex1.webp",
            description:
                "Создаём уникальные дизайн-проекты с учётом стиля, комфорта и функциональности.",
            link: "/design",
        },
        {
            title: "Комплексный ремонт",
            image: "/ex2.webp",
            description:
                "Полный цикл ремонтных работ — от черновых до финишной отделки.",
            link: "/renovation",
        },
        {
            title: "Авторский надзор",
            image: "/ex3.webp",
            description:
                "Контроль за точным выполнением проекта, подбор материалов и мебели.",
            link: "/supervision",
        },
        {
            title: "Комплектация объекта",
            image: "/ex4.webp",
            description:
                "Закупка, логистика и установка мебели, техники и декора.",
            link: "/furnishing",
        },
    ];

    return (
        <section aria-label="Основные услуги компании" className="flex justify-center mb-36 mt-8 md:mt-36 px-4 md:px-8">
            <div className="w-full max-w-[1600px]">
                {/* Заголовок */}
                <header className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-[#B49C6C] mb-5">
                        Наши основные услуги
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                        Мы создаём интерьеры, где каждая деталь продумана до совершенства.
                        Индивидуальный подход, точное исполнение и безупречное качество —
                        основа нашей работы.
                    </p>
                </header>

                {/* Карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <article
                            key={index}
                            className="flex flex-col sm:flex-row rounded-3xl overflow-hidden bg-white"
                        >
                            {/* Левая часть — текст */}
                            <div className="flex flex-col justify-center bg-[#f8f8f8] p-6 sm:p-8 w-full sm:w-1/2">
                                <h3 className="text-xl md:text-3xl mb-3">{service.title}</h3>
                                <h4 className="text-gray-700 text-sm md:text-base mb-8">
                                    {service.description}
                                </h4>

                                {/* Элегантная кнопка */}
                                <Link
                                    href={service.link}
                                    className="group inline-flex items-center gap-2 w-fit px-4 py-2 sm:px-6 sm:py-2 border border-[#B49C6C] text-[#B49C6C] rounded-full text-sm sm:text-base transition-all duration-300 hover:bg-[#B49C6C] hover:text-white"
                                    aria-label={`Подробнее об услуге ${service.title}`}
                                >
                                    Подробнее
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                                </Link>
                            </div>

                            {/* Правая часть — фото */}
                            <div className="relative w-full sm:w-1/2 h-[290px] sm:h-auto min-h-[290px]">
                                <Image
                                    src={service.image}
                                    alt={`Пример работы: ${service.title}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index < 2}
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
