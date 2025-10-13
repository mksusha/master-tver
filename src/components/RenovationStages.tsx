"use client";

const stages = [
    {
        title: "Этап 1 — Подготовка и демонтаж",
        duration: "5–7 рабочих дней",
        text: "Удаляем старые покрытия, вывозим строительный мусор, подготавливаем объект к черновым работам.",
    },
    {
        title: "Этап 2 — Черновые работы",
        duration: "15–20 рабочих дней",
        text: "Выравнивание стен, стяжка полов, электрика, сантехника и инженерные коммуникации.",
    },
    {
        title: "Этап 3 — Чистовая отделка",
        duration: "20–30 рабочих дней",
        text: "Покраска, плитка, напольные покрытия, установка дверей и декоративных элементов.",
    },
    {
        title: "Этап 4 — Комплектация и сдача объекта",
        duration: "5–10 рабочих дней",
        text: "Монтаж мебели, освещения, текстиля и декора. Финальная уборка и передача готового объекта заказчику.",
    },
];

export default function RenovationStages() {
    return (
        <section className="mt-24 mb-32 w-full bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-[#B49C6C] mb-5">
                        Этапы ремонта под ключ
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                        Каждый этап — это контролируемый процесс, в котором качество,
                        сроки и внимание к деталям остаются на первом месте.
                    </p>
                </div>

                {/* Сетка */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stages.map((stage, i) => (
                        <div
                            key={i}
                            className="rounded-3xl bg-[#f8f8f8] hover:bg-[#f2f2f2] transition-all duration-300 p-8 shadow-sm hover:shadow-md"
                        >
                            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">
                                {stage.title}
                            </h3>
                            <p className="text-[#B49C6C] font-medium text-xl mb-4">
                                {stage.duration}
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {stage.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
