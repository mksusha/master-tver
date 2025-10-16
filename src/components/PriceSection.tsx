"use client";

export default function PriceSection() {
    return (
        <section className="w-full   max-w-[1600px] mx-auto px-4 md:px-8 text-white  ">
            <div className=" bg-[#B49C6C] py-20 px-8 border rounded-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Левая часть — текст */}
                <div className="space-y-6">


                    <h2 className="text-3xl md:text-4xl leading-tight">
                        Стоимость
                    </h2>

                    <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-[600px]">
                        Итоговая цена зависит от масштаба и сложности дизайн-проекта.
                        Однако с авторским надзором проект обычно обходится дешевле,
                        так как исключаются лишние затраты на исправление ошибок и
                        корректировки в процессе стройки.
                    </p>
                </div>

                {/* Правая часть — стоимость с рамкой */}
                <div className="flex flex-col justify-center items-center border-2 border-white/40 rounded-4xl py-12 px-8 md:ml-auto md:w-[80%]">
                    <p className="uppercase tracking-widest text-sm opacity-90 mb-3">
                        средняя стоимость в месяц
                    </p>
                    <p className="text-5xl">≈ 15 000 ₽</p>
                </div>
            </div>
        </section>
    );
}
