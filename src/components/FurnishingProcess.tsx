"use client";

const stages = [
    {
        number: "01",
        title: "Анализ и подбор",
        text: "Изучаем утверждённый дизайн-проект, формируем список необходимых позиций — мебель, свет, сантехника, текстиль, декор.",
    },
    {
        number: "02",
        title: "Согласование позиций",
        text: "Подбираем оптимальные варианты по бюджету и стилю, согласовываем с вами все позиции и поставщиков.",
    },
    {
        number: "03",
        title: "Поставка и логистика",
        text: "Организуем закупку, доставку и хранение. Контролируем сроки поставок и качество каждого элемента.",
    },
    {
        number: "04",
        title: "Монтаж и расстановка",
        text: "Наши специалисты аккуратно размещают мебель, освещение и декор в соответствии с проектом — готовый интерьер без лишних хлопот.",
    },
];

export default function FurnishingSteps() {
    return (
        <section className="mt-20 mb-32 w-full bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Левая колонка — заголовок и описание */}
                <div className="md:sticky md:top-24 h-fit py-5 space-y-5 self-start">
                    <p className="uppercase text-2xl tracking-widest text-[#B49C6C]">
                        Этапы работы
                    </p>

                    <h2 className="text-3xl md:text-4xl leading-tight text-gray-900">
                        Как проходит комплектация объекта
                    </h2>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-[500px]">
                        Мы полностью берём на себя организацию всех процессов — от подбора предметов до финального размещения.
                        Вам остаётся только наслаждаться результатом.
                    </p>
                </div>

                {/* Правая колонка — карточки этапов */}
                <div className="flex flex-col gap-6">
                    {stages.map((stage, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-[#f8f8f8] p-8 flex items-start gap-6 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#B49C6C] flex items-center justify-center text-white text-xl font-medium">
                                {stage.number}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl mb-2">{stage.title}</h3>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {stage.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
