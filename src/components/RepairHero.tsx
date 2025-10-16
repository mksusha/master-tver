"use client";

import Image from "next/image";
import React, { useState } from "react";
import ModalContact from "@/components/ModalContact";

export default function RepairHero() {
    const [open, setOpen] = useState(false);

    return (
        <section
            className="relative flex justify-center mt-32 md:mb-28 mb-24 px-4 md:px-8"
            aria-label="Главный баннер: дизайн-проекты интерьера в Твери"
        >
            <div className="relative w-full max-w-[1600px] h-[42vw] max-h-[790px] min-h-[500px] md:min-h-[700px] rounded-3xl rounded-br-none overflow-hidden">

                {/* Фото-фон с LCP */}
                <Image
                    src="/proj1.jpg"
                    alt="Дизайн-проект интерьера премиум-класса в Твери"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1600px"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Текст */}
                <div className="absolute top-16 left-4 md:top-24 md:left-16 text-white z-10">
                    <h1 className="text-2xl sm:text-3xl md:text-7xl leading-tight max-w-[300px] sm:max-w-[400px] md:max-w-[600px]">
                        Реализуем <br /> дизайн-проекты интерьера <br /> в Твери
                    </h1>
                    <p className="mt-2 sm:mt-4 text-sm sm:text-3xl max-w-[350px] sm:max-w-[500px] text-white/90">
                        Комплексная реализация: дизайн, ремонт, авторский надзор и комплектация объекта
                    </p>
                </div>

                {/* Кнопка */}
                <div className="absolute bottom-0 right-0 flex flex-col items-center z-10">
                    <div className="absolute bottom-[-1px] right-[-14px] md:right-[-19px] w-[240px] sm:w-[300px] md:w-[345px] h-[80px] sm:h-[100px] md:h-[110px] -z-10">
                        <Image
                            src="/curve.svg"
                            alt="Декоративная волна"
                            fill
                            className="object-cover scale-x-[-1]"
                            priority
                        />
                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="px-4 sm:px-5 py-3 sm:py-4 mb-1 text-base sm:text-lg md:text-2xl font-medium text-white
                      bg-gradient-to-r from-[#B49C6C] to-[#ccb689]
                      hover:opacity-90 transition-all duration-300
                      rounded-2xl"
                        aria-label="Связаться с компанией"
                    >
                        Связаться с нами
                    </button>
                </div>
            </div>

            {/* Модалка */}
            <ModalContact open={open} onClose={() => setOpen(false)} />
        </section>
    );
}
