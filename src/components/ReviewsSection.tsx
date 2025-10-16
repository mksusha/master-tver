"use client";

import Image from "next/image";

export default function ReviewsSection() {
    return (
        <section
            aria-label="Отзывы клиентов компании Гермес"
            className="mt-24 mb-24 flex flex-col items-center justify-center px-4 md:px-8 relative z-10"
        >
            {/* Заголовок */}
            <header className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-medium text-[#B49C6C] mb-5">
                    Отзывы наших клиентов
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                    Мы гордимся тем, что наши клиенты остаются довольны результатом.
                    Здесь вы можете ознакомиться с отзывами и убедиться в качестве нашей работы.
                </p>
            </header>

            {/* Основная сетка */}
            <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[500px] md:max-h-[750px]">

                {/* Левая колонка */}
                <div className="grid grid-rows-3 gap-6 h-full">
                    <article className="bg-secondary rounded-3xl p-6 flex flex-col justify-start shadow-sm">
                        <header className="flex items-center gap-4 mb-4">
                            <h3 className="font-semibold text-lg text-gray-900">Алексей</h3>
                        </header>
                        <p className="text-gray-700 leading-relaxed">
                            Сотрудничество с Гермес принесло мне профессиональный ремонт в квартире.
                            Сделали аккуратный ремонт в срок, без перерасхода бюджета.
                            Теперь моя квартира — уютный уголок!
                        </p>
                    </article>

                    <div className="relative rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src="/h2.jpg"
                            alt="Интерьер квартиры после ремонта Гермес"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <article className="bg-secondary rounded-3xl p-6 flex flex-col justify-start shadow-sm">
                        <header className="flex items-center gap-4 mb-4">
                            <h3 className="font-semibold text-lg text-gray-900">Максим</h3>
                        </header>
                        <p className="text-gray-700 leading-relaxed">
                            Пользовался услугами этой фирмы для ремонта квартиры.
                            Работают быстро, качественно, ответственно.
                            Сроки соблюдены, результат превзошёл ожидания.
                        </p>
                    </article>
                </div>

                {/* Средняя колонка */}
                <div className="grid grid-rows-2 gap-6 h-full">
                    <div className="relative rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src="/h1.jpg"
                            alt="Интерьер квартиры после ремонта Гермес"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <article className="bg-secondary rounded-3xl p-6 flex flex-col justify-start shadow-sm">
                        <header className="flex items-center gap-4 mb-4">
                            <h3 className="font-semibold text-lg text-gray-900">Руслан</h3>
                        </header>
                        <p className="text-gray-700 leading-relaxed">
                            Сотрудники компании Гермес сделали качественный ремонт квартиры.
                            Проект разработали быстро, цена ниже, чем в других компаниях.
                            Огромное спасибо за профессионализм и пунктуальность!
                        </p>
                    </article>
                </div>

                {/* Правая колонка — Яндекс отзывы */}
                <div className="rounded-3xl overflow-hidden border-2 border-secondary bg-white shadow-sm
                        w-full lg:w-auto lg:h-full">
                    <div className="w-full h-[400px] md:h-[600px] lg:h-full">
                        <iframe
                            src="https://yandex.ru/maps-reviews-widget/199673139492?comments"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="rounded-3xl"
                            title="Отзывы на Яндекс.Картах"
                        />
                    </div>
                    {/* SEO fallback для ботов */}
                    <noscript>
                        <p className="p-4 text-gray-700">
                            Ознакомьтесь с отзывами наших клиентов на Яндекс.Картах: сотрудничество с Гермес приносит аккуратный ремонт, профессионализм и довольных клиентов.
                        </p>
                    </noscript>
                </div>

            </div>
        </section>
    );
}
