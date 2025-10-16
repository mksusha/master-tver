"use client";

import Image from "next/image";

export default function FurnishingSection() {
    const items = [
        {
            title: "Мебель",
            image: "/ex1.webp",
            description: "Подбор и поставка мебели для всех зон интерьера, полностью по дизайн-проекту.",
        },
        {
            title: "Освещение",
            image: "/svet.webp",
            description: "Светильники и лампы, создающие комфортную и стильную атмосферу.",
        },
        {
            title: "Сантехника",
            image: "/santech.webp",
            description: "Современная сантехника и комплектующие для ванной комнаты.",
        },
        {
            title: "Декор",
            image: "/proj5.jpg",
            description: "Элементы декора и аксессуары для завершённого образа интерьера.",
        },
    ];

    return (
        <section className="flex justify-center mb-36 mt-8 md:mt-36 px-4 md:px-8">
            <div className="w-full max-w-[1600px]">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-[#B49C6C] mb-5">
                        Комплектация объекта
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                        Подбираем и поставляем мебель, освещение, сантехнику и декор — создаём полностью готовое пространство под ключ.
                    </p>
                </div>

                {/* Карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row rounded-3xl overflow-hidden bg-white"
                        >
                            {/* Левая часть — текст */}
                            <div className="flex flex-col justify-center bg-[#f8f8f8] p-6 sm:p-8 w-full sm:w-1/2">
                                <h3 className="text-xl md:text-3xl mb-3">{item.title}</h3>
                                <p className="text-gray-700 text-sm md:text-base mb-8">{item.description}</p>
                            </div>

                            {/* Правая часть — иконка */}
                            <div
                                className="relative w-full sm:w-1/2 h-[290px] sm:h-auto min-h-[290px] flex items-center justify-center bg-[#e5e5e5]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover" // object-contain если нужно без обрезки
                                    priority={index < 2}
                                />
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
