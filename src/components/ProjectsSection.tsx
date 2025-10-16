"use client";

import Image from "next/image";

const projects = [
    { src: "/proj1.jpg", alt: "Пример интерьера: Ремонт квартиры премиум-класса" },
    { src: "/proj2.jpg", alt: "Пример интерьера: Дизайн интерьера гостиной" },
    { src: "/proj3.jpg", alt: "Пример интерьера: Дизайн кухни в современном стиле" },
    { src: "/proj4.jpg", alt: "Пример интерьера: Ремонт ванной комнаты премиум" },
    { src: "/proj5.jpg", alt: "Пример интерьера: Спальня с авторским дизайном" },
    { src: "/proj6.jpg", alt: "Пример интерьера: Детская комната с интерьером" },
    { src: "/proj7.jpg", alt: "Пример интерьера: Рабочий кабинет премиум-класса" },
    { src: "/proj8.jpg", alt: "Пример интерьера: Гостиная с индивидуальным дизайном" },
];

export default function ProjectsSection() {
    return (
        <section
            aria-label="Наши проекты"
            className="mt-32 mb-32 w-full bg-white"
        >
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Левая колонка — заголовок */}
                <div className="md:sticky md:top-24 h-fit py-5 space-y-5 self-start">
                    <p className="uppercase text-2xl tracking-widest text-[#B49C6C]">
                        Наши проекты
                    </p>

                    <h2 className="text-3xl md:text-4xl leading-tight text-gray-900">
                        Последние реализованные <br /> интерьеры
                    </h2>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-[500px]">
                        Мы гордимся каждым выполненным проектом — от уютных квартир до
                        масштабных частных домов. Каждый интерьер создан с вниманием к
                        деталям и воплощает индивидуальный стиль клиента.
                    </p>
                </div>

                {/* Правая колонка — галерея */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {projects.map((project, idx) => (
                        <article
                            key={idx}
                            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={project.src}
                                alt={project.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-center"
                                priority={idx < 2}
                                placeholder="blur"
                                blurDataURL="/blur-placeholder.jpg"
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
