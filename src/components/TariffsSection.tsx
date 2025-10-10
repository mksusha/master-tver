"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function TariffsSection() {
    const [activeTab, setActiveTab] = useState<"design" | "repair">("design");

    const designTariffs = [
        {
            title: "Полный дизайн-проект",
            price: "3500 ₽/м²",
            desc: "Полный пакет: планировка, визуализации, чертежи и подбор материалов.",
            includes: ["Планировочные решения", "3D-визуализации", "Рабочие чертежи", "Подбор материалов"],
        },
        {
            title: "Коллажный дизайн-проект",
            price: "2500 ₽/м²",
            desc: "Концептуальные решения и коллажи для визуализации интерьера.",
            includes: ["Коллажи по помещениям", "Планировка", "Рекомендации по отделке"],
        },
        {
            title: "Технический проект",
            price: "1200 ₽/м²",
            desc: "Рабочие чертежи и схемы для самостоятельного выполнения ремонта.",
            includes: ["Рабочие чертежи", "Электрика и сантехника", "Планы потолков и полов"],
        },
    ];

    const repairTariffs = [
        {
            title: "Косметический ремонт",
            price: "от 9000 ₽/м²",
            desc: "Обновление интерьера без перепланировки и демонтажа конструкций.",
            includes: ["Шпаклёвка и покраска", "Поклейка обоев", "Замена напольного покрытия"],
        },
        {
            title: "Капитальный ремонт",
            price: "от 18000 ₽/м²",
            desc: "Полная замена отделки, коммуникаций, сантехники и электрики.",
            includes: ["Полный демонтаж", "Новая электрика и сантехника", "Выравнивание стен и полов"],
        },
        {
            title: "Авторский ремонт",
            price: "от 23000 ₽/м²",
            desc: "Элитный ремонт по индивидуальному дизайн-проекту с авторским надзором.",
            includes: ["Премиальные материалы", "Индивидуальные решения", "Авторский надзор и контроль"],
        },
    ];

    const currentTariffs = activeTab === "design" ? designTariffs : repairTariffs;

    return (
        <section className="mt-28 mb-28 flex justify-center px-4 md:px-8">
            <div className="w-full max-w-[1600px]">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-brand mb-5">
                        Тарифы
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                        Выберите подходящий формат — дизайн или ремонт. Мы подготовили прозрачные тарифы без скрытых платежей.
                    </p>
                </div>

                {/* Переключатель */}
                <div className="flex justify-center mb-10">
                    <div className="flex bg-secondary rounded-full p-1">
                        <button
                            onClick={() => setActiveTab("design")}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${
                                activeTab === "design"
                                    ? "bg-[#B49C6C] text-white shadow-md"
                                    : "text-gray-700 hover:text-black"
                            }`}
                        >
                            Дизайн-проекты
                        </button>
                        <button
                            onClick={() => setActiveTab("repair")}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${
                                activeTab === "repair"
                                    ? "bg-[#B49C6C] text-white shadow-md"
                                    : "text-gray-700 hover:text-black"
                            }`}
                        >
                            Ремонт
                        </button>
                    </div>
                </div>

                {/* Карточки */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {currentTariffs.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all p-8 flex flex-col items-start"
                        >
                            <h3 className="text-3xl text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-[#B49C6C] text-5xl  mb-4">{item.price}</p>
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
