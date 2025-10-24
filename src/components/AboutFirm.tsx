"use client";

import React from "react";

const AboutFirm: React.FC = () => {
    return (
        <section className="w-full bg-white py-5 px-4 md:px-8">
            <div className="max-w-[1600px] mx-auto">
                {/* Верхний текстовый блок */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-light leading-snug text-gray-900 max-w-[1000px]">
                        <span className="text-brand font-normal">Гермес</span> — это архитектурное проектирование,
                        инженерные решения и современные технологии
                        строительства.
                    </h2>
                    <p className="mt-8 max-w-[900px] text-lg md:text-xl text-gray-700 leading-relaxed">
                        Компания «Гермес» помогает клиентам определить оптимальные конструктивные решения, учитывая
                        особенности застройки и индивидуальные предпочтения. Мы создаём эффективные и долговечные
                        проекты, применяя инновационные материалы и технологии.
                    </p>
                </div>

                {/* Цифры (карточки) */}
                {/* Карточки */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div
                        className="bg-gray-50 rounded-3xl p-14 text-center md:text-left transition-all duration-300">
                    <p className="text-[190px] leading-none font-light text-gray-900">11</p>
                        <p className="mt-4 text-gray-700 text-xl font-light">лет опыта</p>
                    </div>

                    <div
                        className="bg-gray-50 rounded-3xl p-14 text-center md:text-left htransition-all duration-300">
                        <p className="text-[190px] leading-none font-light text-gray-900">737</p>
                        <p className="mt-4 text-gray-700 text-xl font-light">проектов</p>
                    </div>

                    <div
                        className="bg-gray-50 rounded-3xl p-14 text-center md:text-left transition-all duration-300">
                        <p className="text-[190px] leading-none font-light text-gray-900">62.</p>
                        <p className="mt-4 text-gray-700 text-xl font-light">62450 м² выполненных объектов</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFirm;
