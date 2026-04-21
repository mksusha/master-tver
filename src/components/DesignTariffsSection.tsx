"use client";

import { CheckCircle } from "lucide-react";

export default function DesignTariffsSection() {
    const designTariffs = [
        {
            title: "Полный дизайн-проект",
            price: "от 2 900 ₽/м²",
            desc: "Полный пакет: планировка, визуализации, чертежи и подбор материалов.",
            includes: [
                "Планировочные решения",
                "3D-визуализации",
                "Рабочие чертежи",
                "Подбор материалов",
            ],
        },
        {
            title: "Коллажный дизайн-проект",
            price: "от 2 300 ₽/м²",
            desc: "Концептуальные решения и коллажи для визуализации интерьера.",
            includes: [
                "Коллажи по помещениям",
                "Планировка",
                "Рекомендации по отделке",
            ],
        },
        {
            title: "Технический проект",
            price: "от 1 200 ₽/м²",
            desc: "Рабочие чертежи и схемы для самостоятельного выполнения ремонта.",
            includes: [
                "Рабочие чертежи",
                "Электрика и сантехника",
                "Планы потолков и полов",
            ],
        },
    ];

    return (
        <section className="mt-28 mb-28 flex justify-center px-4 md:px-8">
            <div className="w-full max-w-[1600px]">
                                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-brand mb-5">
                        Дизайн-проекты
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                        Мы разрабатываем индивидуальные дизайн-проекты для квартир и домов — от планировки до финальных чертежей.
                        Каждый вариант адаптирован под ваш стиль, задачи и бюджет.
                    </p>
                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {designTariffs.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all p-8 flex flex-col items-start"
                        >
                            <h3 className="text-3xl text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-[#B49C6C] text-5xl mb-4">{item.price}</p>
                            <p className="text-gray-700 text-xl mb-4 leading-relaxed">{item.desc}</p>

                            <ul className="space-y-2 mt-2">
                                {item.includes.map((point, i) => (
                                    <li key={i} className="flex items-center text-lg gap-2 text-gray-800">
                                        <CheckCircle className="text-[#B49C6C] w-5 h-5 flex-shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
