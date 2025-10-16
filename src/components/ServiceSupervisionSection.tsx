"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const serviceDetails = [
    {
        title: "Подбор поставщиков",
        text: "Архитектор подбирает надёжных поставщиков материалов и оборудования, соответствующих требованиям проекта.",
    },
    {
        title: "Подготовка технического задания",
        text: "Формируется ТЗ и проводятся консультации поставщиков и подрядчиков для получения корректных коммерческих предложений.",
    },
    {
        title: "Анализ предложений",
        text: "Производится детальный анализ коммерческих предложений и спецификаций от поставщиков и смежных компаний.",
    },
    {
        title: "График поставок",
        text: "Разрабатывается график поставки материалов и оборудования на объект с учётом сроков строительства.",
    },
    {
        title: "Ведение авторского надзора",
        text: "Ведётся журнал авторского надзора с полной историей всех изменений и контрольных точек объекта.",
    },
    {
        title: "Разработка конструктивных узлов",
        text: "Прорабатываются конструктивные решения и даются консультации специалистам по особенностям монтажа.",
    },
    {
        title: "Представление интересов заказчика",
        text: "Архитектор представляет интересы клиента на всех этапах реализации проекта и контролирует исполнителей.",
    },
    {
        title: "Контроль соответствия проекту",
        text: "Осуществляется контроль ремонтно-отделочных работ на предмет точного соответствия дизайн-проекту.",
    },
];

export default function ServiceSupervisionSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="mt-20 mb-32 w-full bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Левая колонка */}
                <div className="md:sticky md:top-24 h-fit py-5 space-y-5 self-start">
                    <p className="uppercase text-2xl tracking-widest text-[#B49C6C]">
                        Авторский надзор
                    </p>

                    <h2 className="text-3xl md:text-4xl leading-tight text-gray-900">
                        Контроль и сопровождение проекта <br /> на каждом этапе строительства
                    </h2>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-[500px]">
                        Услуга гарантирует, что реализованный проект будет полностью соответствовать согласованному плану.
                        Архитектор берёт на себя ответственность за результат стройки, контролируя каждый этап процесса.
                    </p>
                </div>

                {/* Правая колонка */}
                <div className="flex flex-col gap-4">
                    {serviceDetails.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-[#f8f8f8] overflow-hidden"
                        >
                            <button
                                onClick={() => toggleItem(idx)}
                                className="w-full flex justify-between items-center text-left px-8 py-6 text-2xl font-medium text-gray-900 hover:text-[#B49C6C] transition-colors"
                            >
                                {item.title}
                                <ChevronDown
                                    className={`w-6 h-6 transition-transform duration-300 ${
                                        activeIndex === idx ? "rotate-180 text-[#B49C6C]" : "rotate-0"
                                    }`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-500 ease-in-out ${
                                    activeIndex === idx
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="overflow-hidden px-8 pb-6 text-gray-700 text-base leading-relaxed">
                                    {item.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
