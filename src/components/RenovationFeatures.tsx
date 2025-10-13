"use client";

const features = [
    {
        number: "01",
        title: "Полный цикл под ключ",
        text: "Берём на себя все этапы: от демонтажа и черновых работ до чистовой отделки, мебели и декора.",
    },
    {
        number: "02",
        title: "Контроль качества и сроков",
        text: "Инженер и прораб ежедневно контролируют процесс, обеспечивая точное соблюдение сроков и стандартов.",
    },
    {
        number: "03",
        title: "Прозрачный бюджет",
        text: "Вы получаете детальную смету и отчёты о расходах — никаких скрытых платежей и сюрпризов.",
    },
    {
        number: "04",
        title: "Гарантия на работы",
        text: "Мы предоставляем гарантию на все виды ремонтных и отделочных работ.",
    },
];

export default function RenovationFeatures() {
    return (
        <section className="mt-24 mb-28 w-full bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Левая колонка */}
                <div className="md:sticky md:top-24 py-5 space-y-5 self-start">
                    <p className="uppercase text-2xl tracking-widest text-[#B49C6C]">
                        Почему выбирают нас
                    </p>

                    <h2 className="text-3xl md:text-4xl leading-tight text-gray-900">
                        Комплексный ремонт <br /> без стресса и лишних забот
                    </h2>

                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-[500px]">
                        Мы создаём идеальное пространство, где всё продумано — от инженерных решений
                        до последнего штриха в отделке.
                    </p>
                </div>

                {/* Правая колонка — карточки */}
                <div className="flex flex-col gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-[#f8f8f8] p-8 hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-xl md:text-2xl mb-2 text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 text-base leading-relaxed">
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
