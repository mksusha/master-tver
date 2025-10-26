"use client";

import { CheckCircle } from "lucide-react";

export default function RepairTariffsSection() {
    const repairTariffs = [
        {
            title: "Косметический ремонт",
            price: "от 9 000 ₽/м²",
            desc: "Обновление интерьера без перепланировки и сложных работ. Идеально для освежения обстановки.",
            includes: [
                "Удаление старых покрытий (обои, плинтусы, краска).",
                "Шпаклевка стен и потолков под отделку.",
                "Покраска или оклейка стен обоями.",
                "Укладка ламината, керамогранита, паркета.",
                "Установка новых плинтусов.",
                "Выравнивание потолков и покраска.",
                "Монтаж осветительных приборов.",
            ],
        },
        {
            title: "Капитальный ремонт",
            price: "от 15 000 ₽/м²",
            desc: "Полное обновление помещения с заменой инженерных систем и выравниванием всех поверхностей.",
            includes: [
                "Полный демонтаж старой отделки.",
                "Выравнивание стен, полов и потолков.",
                "Укладка плитки в санузлах и кухне.",
                "Замена проводки, розеток, выключателей.",
                "Штукатурка стен под финишное покрытие.",
                "Покраска или оклейка стен обоями.",
                "Установка натяжных потолков или ГКЛ.",
                "Монтаж систем водоснабжения и канализации.",
                "Установка сантехнического оборудования.",
            ],
        },
        {
            title: "Авторский ремонт",
            price: "от 29 000 ₽/м²",
            desc: "Элитный ремонт с индивидуальным дизайн-проектом и авторским контролем на каждом этапе.",
            includes: [
                "Разработка индивидуального дизайн-проекта.",
                "Демонтаж отделки и инженерных систем.",
                "Перепланировка помещений, подготовка стен.",
                "Укладка паркета, керамогранита, инженерной доски.",
                "Декоративная отделка стен (штукатурка, покраска, 3D панели, молдинги).",
                "Устройство сложных потолков с подсветкой.",
                "Монтаж индивидуальных материалов, сантехники и оборудования.",
                "Установка дверей и декоративных элементов.",
            ],
        },
    ];

    return (
        <section className="mt-28 mb-28 flex justify-center px-4 md:px-8">
            <div className="w-full max-w-[1600px]">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-brand mb-5">
                        Виды ремонта
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                        Мы предлагаем три формата ремонта — от косметического до авторского. Каждый вариант адаптирован под разные цели, задачи и бюджет.
                    </p>
                </div>

                {/* Карточки */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {repairTariffs.map((item, idx) => (
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
