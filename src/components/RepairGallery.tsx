"use client";

import React from "react";
import Image from "next/image";

const media = [
    { src: "/stats.jpg", type: "image" },
    { src: "/proj1.jpg", type: "image" },
    { src: "/proj3.jpg", type: "image" },
    { src: "/proj5.jpg", type: "image" },
    { src: "/proj4.jpg", type: "image" },
];

const heights = [
    "h-[480px]",
    "h-[560px]",
    "h-[480px]",
    "h-[560px]",
    "h-[480px]",
];

const offsets = [
    "translate-y-6",
    "-translate-y-10",
    "translate-y-3",
    "-translate-y-8",
    "translate-y-5",
];

const RepairGallery: React.FC = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
                {/* Заголовок */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-medium text-[#B49C6C] mb-5">
                        Наши проекты
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                        Посмотрите на примеры наших комплексных ремонтов — от идеи до
                        полной реализации, с контролем сроков и качеством исполнения.
                    </p>
                </div>

                {/* Галерея */}
                <div className="hidden md:flex justify-center gap-3 lg:gap-6 overflow-hidden">
                    {media.map((item, i) => (
                        <div
                            key={i}
                            className={`relative w-1/5 ${heights[i]} ${offsets[i]} mt-10 overflow-hidden rounded-3xl shadow-lg transition-all duration-700`}
                        >
                            {item.type === "video" ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={`Repair ${i + 1}`}
                                    fill
                                    className="object-cover rounded-3xl hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Мобильная версия */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4 mt-10">
                    {media.map((item, i) => (
                        <div
                            key={i}
                            className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-md"
                        >
                            {item.type === "video" ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={`Repair mobile ${i + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RepairGallery;
