"use client";

import Image from "next/image";

const projects = [
    { src: "/font-blok21.png", alt: "Пример интерьера: Гостиная с индивидуальным дизайном" },
    { src: "/first-blok16.jpg", alt: "Пример интерьера: Гостиная с индивидуальным дизайном" },
    { src: "/first-blok12.jpg", alt: "Пример интерьера: Гостиная с индивидуальным дизайном" },
    { src: "/first-blok6.jpg", alt: "Пример интерьера: Гостиная с индивидуальным дизайном" },
    { src: "/first-blok13.jpg", alt: "Пример интерьера: Гостиная с индивидуальным дизайном" },
    { src: "/first-blok3.jpg", alt: "Пример интерьера: Гостиная с индивидуальным дизайном" },
    { src: "/font-blok22.png", alt: "Пример интерьера: Гостиная с индивидуальным дизайном" },

    { src: "/first-blok2.jpg", alt: "Пример интерьера: Гостиная с индивидуальным дизайном" },
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
