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

const RepairGallerySimple: React.FC = () => {
    return (
        <section className="w-full bg-white py-6">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
                {/* Галерея */}
                <div className="hidden md:flex justify-center gap-4 lg:gap-4 overflow-hidden">
                    {media.map((item, i) => (
                        <div
                            key={i}
                            className="relative w-1/5 h-[390px] overflow-hidden rounded-3xl shadow-lg transition-transform duration-700"
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

export default RepairGallerySimple;
