"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Как долго длится ремонт под ключ?",
        answer:
            "Сроки зависят от площади и сложности проекта, но в среднем ремонт под ключ занимает от 2 до 6 месяцев. Мы всегда составляем подробный график и строго ему следуем.",
    },
    {
        question: "Можно ли заказать только дизайн-проект без ремонта?",
        answer:
            "Да, вы можете заказать только дизайн-проект. Мы подготовим полную документацию и визуализацию, чтобы вы могли реализовать проект с любой строительной компанией.",
    },
    {
        question: "Вы работаете с загородными домами?",
        answer:
            "Да, мы выполняем дизайн и ремонт как квартир, так и загородных домов. Учитываем архитектуру, особенности участка и создаём гармоничные интерьеры под ваш образ жизни.",
    },
    {
        question: "Как рассчитывается стоимость работ?",
        answer:
            "Стоимость рассчитывается индивидуально в зависимости от площади, материалов и уровня сложности. После обсуждения проекта мы предоставляем прозрачную смету.",
    },
    {
        question: "Можно ли внести изменения в проект в процессе ремонта?",
        answer:
            "Да, небольшие корректировки возможны. Мы обсуждаем все изменения заранее, чтобы сохранить баланс между сроками, бюджетом и качеством реализации.",
    },
    {
        question: "Какие гарантии вы предоставляете?",
        answer:
            "Мы заключаем официальный договор и предоставляем гарантию на выполненные работы. Все материалы и комплектующие закупаются у проверенных поставщиков с гарантией качества.",
    },
];


export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="mt-20 mb-32 w-full bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Левая колонка */}
                <div className="md:sticky md:top-24 h-fit py-5 space-y-5 self-start">
                    <p className="uppercase text-2xl tracking-widest text-[#B49C6C]">
                        часто задаваемые вопросы
                    </p>

                    <h2 className="text-3xl md:text-4xl leading-tight text-gray-900">
                        Всё, что нужно <br /> знать перед началом проекта
                    </h2>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-[500px]">
                        Мы собрали ответы на самые популярные вопросы наших клиентов. Это поможет вам лучше понять процесс и подготовиться к работе с нами.
                    </p>
                </div>

                {/* Правая колонка — аккордеон */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-[#f8f8f8] overflow-hidden transition-all duration-300 hover:shadow-sm"
                        >
                            <button
                                onClick={() => toggleQuestion(idx)}
                                className="w-full flex justify-between items-center text-left px-8 py-6 text-2xl font-medium text-gray-900 hover:text-[#B49C6C] transition-colors"
                            >
                                {faq.question}
                                <ChevronDown
                                    className={`w-6 h-6 transition-transform duration-300 ${activeIndex === idx ? "rotate-180 text-[#B49C6C]" : "rotate-0"}`}
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
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
