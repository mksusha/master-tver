"use client";

export default function MapSection() {
    return (
        <section className="mt-24 mb-24 flex justify-center px-4 md:px-8">
            <div className="relative w-full max-w-[1600px] bg-secondary rounded-3xl shadow-sm overflow-hidden text-center">
                {/* Заголовок */}
                <div className="py-6 md:py-8 border-b border-gray-100">
                    <h2 className="text-2xl md:text-3xl  text-gray-900">
                        Мы на карте
                    </h2>

                    <p className="mt-1 text-lg md:text-xl font-medium text-gray-800">
                        Тверь, Спортивный переулок, 1А, корп. 1
                    </p>
                    <p className="text-gray-600 mt-2 text-lg">
                        Заезжайте в наш офис — будем рады обсудить ваш проект лично
                    </p>
                </div>

                {/* Карта */}
                <div className="relative w-full h-[400px] md:h-[500px]">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=35.896193%2C56.839325&mode=search&oid=199673139492&ol=biz&sctx=ZAAAAAgBEAAaKAoSCUSKARJN8kFAESY5YFeTa0xAEhIJvajdrwJ8hz8RrTQpBd1ecj8iBgABAgMEBSgKOABAgqANSAFqAnJ1nQHNzMw9oAEAqAEAvQGxnKAuwgEGpKLJ6%2BcFggIf0LMg0YLQstC10YDRjCDRgdC6INCz0LXRgNC80LXRgYoCAJICAjE0mgIMZGVza3RvcC1tYXBzqgIHNjAwMjIzOA%3D%3D&sll=35.896193%2C56.839325&sspn=0.010335%2C0.004043&text=%D0%B3%20%D1%82%D0%B2%D0%B5%D1%80%D1%8C%20%D1%81%D0%BA%20%D0%B3%D0%B5%D1%80%D0%BC%D0%B5%D1%81&z=16.98"
                        frameBorder="0"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full rounded-b-3xl"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
