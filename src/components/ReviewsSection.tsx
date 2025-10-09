"use client";

import Image from "next/image";

export default function ReviewsSection() {
    return (
        <section className="mt-24 mb-24 flex flex-col items-center justify-center px-4 md:px-8 relative z-10">
            {/* Заголовок */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-medium text-[#B49C6C] mb-5">
                    Отзывы наших клиентов
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                    Мы гордимся тем, что наши клиенты остаются довольны результатом.
                    Здесь вы можете ознакомиться с отзывами и убедиться в качестве нашей работы.
                </p>
            </div>

            {/* Основная сетка */}
            <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[500px] md:max-h-[750px]">

                {/* === Левая колонка === */}
                <div className="grid grid-rows-3 gap-6 h-full">
                    {/* Отзыв 1 */}
                    <div className="bg-secondary rounded-3xl p-6 flex flex-col justify-start shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">Алексей</h3>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Сотрудничество с Гермес принесло мне профессиональный ремонт в квартире.
                            Сделали аккуратный ремонт в срок, без перерасхода бюджета.
                            Теперь моя квартира — уютный уголок!
                        </p>
                    </div>

                    {/* Фото */}
                    <div className="relative rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src="/h2.jpg"
                            alt="Интерьер"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Отзыв 3 */}
                    <div className="bg-secondary rounded-3xl p-6 flex flex-col justify-start shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">Максим</h3>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Пользовался услугами этой фирмы для ремонта квартиры.
                            Работают быстро, качественно, ответственно.
                            Сроки соблюдены, результат превзошёл ожидания.
                        </p>
                    </div>
                </div>

                {/* === Средняя колонка === */}
                <div className="grid grid-rows-2 gap-6 h-full">
                    {/* Фото */}
                    <div className="relative rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src="/h1.jpg"
                            alt="Интерьер"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Отзыв Руслана */}
                    <div className="bg-secondary rounded-3xl p-6 flex flex-col justify-start shadow-sm">
                        <div className="flex items-center gap-4 mb-4">
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">Руслан</h3>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Сотрудники компании Гермес сделали качественный ремонт квартиры.
                            Проект разработали быстро, цена ниже, чем в других компаниях.
                            Огромное спасибо за профессионализм и пунктуальность!
                        </p>
                    </div>
                </div>

                {/* === Правая колонка — виджет === */}
                <div className="rounded-3xl overflow-hidden border-2 border-secondary bg-white h-full shadow-sm">
                    <iframe
                        src="https://yandex.ru/maps-reviews-widget/199673139492?comments"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="rounded-3xl"
                        title="yandex-reviews"
                    />
                </div>
            </div>
        </section>
    );
}
