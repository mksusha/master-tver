"use client";

import Image from "next/image";

export default function ServicesSection() {
    const services = [
        {
            title: "Дизайн интерьера",
            image: "/ex1.webp",
            description: "Создаём уникальные дизайн-проекты с учётом стиля, комфорта и функциональности."
        },
        {
            title: "Комплексный ремонт",
            image: "/ex2.webp",
            description: "Полный цикл ремонтных работ — от черновых до финишной отделки."
        },
        {
            title: "Авторский надзор",
            image: "/ex3.webp",
            description: "Контроль за точным выполнением проекта, подбор материалов и мебели."
        },
        {
            title: "Комплектация объекта",
            image: "/ex4.webp",
            description: "Закупка, логистика и установка мебели, техники и декора."
        },
    ];

    return (
        <section className="flex justify-center mb-36 mt-32 px-4">
            <div className="w-full max-w-[1600px]">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-brand mb-5">
                        Наши основные услуги
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                        Мы создаём интерьеры, где каждая деталь продумана до совершенства. Индивидуальный подход, точное исполнение и безупречное качество — основа нашей работы.                    </p>
                </div>

                {/* Карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row rounded-3xl overflow-hidden  bg-white hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Левая часть — текст */}
                            <div className="flex flex-col justify-center bg-[#f8f8f8] p-6 sm:p-8 w-full sm:w-1/2">
                                <h3 className="text-xl md:text-3xl mb-3">{service.title}</h3>
                                <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
                            </div>

                            {/* Правая часть — фото */}
                            <div className="relative w-full sm:w-1/2 h-[290px] sm:h-auto min-h-[290px]">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
