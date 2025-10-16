"use client";

const features = [
    {
        number: "01",
        title: "Ремонт премиум-класса",
        text: "Комплексный ремонт под ключ с полным контролем качества и соблюдением сроков. Мы создаём интерьеры, где комфорт и эстетика соединяются с точностью исполнения.",
    },
    {
        number: "02",
        title: "Разработка дизайн-проектов",
        text: "Разрабатываем индивидуальные проекты с учётом стиля, архитектуры и образа жизни клиента. От планировочных решений до подбора материалов и визуализаций.",
    },
    {
        number: "03",
        title: "Технический и авторский надзор",
        text: "Обеспечиваем точное соответствие строительных и отделочных работ утверждённому дизайн-проекту. Контроль за качеством и деталями на каждом этапе.",
    },
    {
        number: "04",
        title: "Комплектация объекта",
        text: "Подбираем и поставляем мебель, освещение, сантехнику и декоративные элементы. Вы получаете полностью готовое пространство без организационных забот.",
    },
];

export default function Features() {
    return (
        <section className="mt-20 mb-32 w-full bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Левая колонка — статичная */}
                <div className="md:sticky md:top-24 py-5 space-y-5 self-start">
                    <p className="uppercase text-2xl tracking-widest text-[#B49C6C]">
                        Мы предлагаем
                    </p>

                    <h2 className="text-3xl sm:text-4xl leading-tight text-gray-900">
                        Ремонт и дизайн <br /> премиум-класса
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-full md:max-w-[500px]">
                        Комплексная работа с интерьером: от идеи и дизайн-проекта до полной реализации. В каждом проекте внимание к деталям и индивидуальный подход к клиенту.
                    </p>
                </div>

                {/* Правая колонка — карточки */}
                <div className="flex flex-col gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl bg-[#f8f8f8] p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#B49C6C] flex items-center justify-center text-white text-lg sm:text-xl font-medium">
                                {feature.number}
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    {feature.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
