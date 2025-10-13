"use client";

const steps = [
    {
        number: "01",
        title: "Знакомство и концепция",
        text: "Мы начинаем с встречи, где обсуждаем ваши пожелания, стиль и образ жизни. На основе этого формируется концепция будущего интерьера.",
    },
    {
        number: "02",
        title: "Планировочные решения",
        text: "Разрабатываем оптимальную планировку с учётом эргономики, освещения и логики пространства. Создаём основу гармоничного интерьера.",
    },
    {
        number: "03",
        title: "3D-визуализация",
        text: "Подготавливаем фотореалистичные визуализации, которые позволяют увидеть будущий интерьер ещё до начала ремонта.",
    },
    {
        number: "04",
        title: "Рабочая документация",
        text: "Создаём комплект чертежей и технических планов, необходимых для точной реализации проекта без ошибок и переделок.",
    },
];

export default function DesignSteps() {
    return (
        <section className="mt-20 mb-32 w-full bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Левая часть — текст */}
                <div className="md:sticky md:top-24 h-fit py-5 space-y-5 self-start">
                    <p className="uppercase text-2xl tracking-widest text-[#B49C6C]">
                        Этапы работы
                    </p>

                    <h2 className="text-3xl md:text-4xl leading-tight text-gray-900">
                        Как мы создаём <br /> уникальные интерьеры
                    </h2>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-[500px]">
                        Каждый проект начинается с идеи, которая отражает индивидуальность клиента.
                        Мы сопровождаем процесс от концепции до готового пространства, сохраняя стиль, гармонию и комфорт.
                    </p>
                </div>

                {/* Правая часть — карточки */}
                <div className="flex flex-col gap-6">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-[#f8f8f8] p-8 flex items-start gap-6 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#B49C6C] flex items-center justify-center text-white text-xl font-medium">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl mb-2">{step.title}</h3>
                                <p className="text-gray-700 text-base leading-relaxed">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
