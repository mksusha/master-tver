"use client";

import React from "react";

const stages = [
    {
        number: "Этап 1",
        duration: "7–10 рабочих дней",
        items: [
            {
                title: "Знакомство с объектом",
                text: "Проводим выезд на объект, выполняем замеры и фиксируем все технические особенности помещения.",
            },
            {
                title: "Определяем стиль",
                text: "Обсуждаем ваши идеи, создаём анкету пожеланий и формируем направление будущего дизайна.",
            },
            {
                title: "Разработка планировки",
                text: "Дизайнер готовит несколько вариантов планировки и помогает выбрать оптимальный.",
            },
        ],
    },
    {
        number: "Этап 2",
        duration: "25–30 рабочих дней",
        items: [
            {
                title: "Создание концепта",
                text: "Разрабатываем концепт будущего интерьера с подбором материалов, текстур и цветов.",
            },
            {
                title: "3D-визуализация",
                text: "Создаём фотореалистичные визуализации, чтобы вы могли увидеть интерьер до реализации.",
            },
            {
                title: "Согласование деталей",
                text: "Презентуем проект, вносим корректировки и утверждаем финальное видение.",
            },
        ],
    },
    {
        number: "Этап 3",
        duration: "17–22 рабочих дня",
        items: [
            {
                title: "Разработка чертежей",
                text: "Готовим полный пакет технических чертежей для строителей и подрядчиков.",
            },
            {
                title: "Ведомости материалов",
                text: "Составляем список мебели, отделки, освещения и декора с указанием количества и характеристик.",
            },
            {
                title: "Формирование бюджета",
                text: "Просчитываем стоимость реализации проекта с учётом всех материалов и работ.",
            },
        ],
    },
];

const ProjectStages: React.FC = () => {
    return (
        <section className="mt-24 mb-32 w-full bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
                {/* Заголовок */}


                {/* Сетка этапов */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stages.map((stage, i) => (
                        <div
                            key={i}
                            className="rounded-4xl overflow-hidden bg-secondary shadow-sm"
                        >
                            {/* Верхняя часть */}
                            <div className="bg-[#B49C6C]  text-white px-6 py-8 rounded-t-4xl">
                                <p className="text-4xl uppercase tracking-wider opacity-90">{stage.number}</p>
                                <p className="text-lg mt-2 opacity-90">{stage.duration}</p>
                            </div>

                            {/* Контент */}
                            <div className="p-8 space-y-6">
                                {stage.items.map((item, j) => (
                                    <div key={j}>
                                        <h4 className="text-2xl font-medium mb-2 text-gray-900">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-700 text-base leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectStages;
