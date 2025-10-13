"use client";

export default function DesignVideos() {
    return (
        <section className="mt-28 mb-32 w-full bg-white">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                {/* Заголовок */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium text-[#B49C6C] mb-5">
                        Атмосфера наших проектов
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-[700px] mx-auto">
                        Короткие видео передают эстетику и настроение наших интерьеров —
                        внимание к деталям, гармония пропорций и ощущение комфорта в каждом кадре.
                    </p>
                </div>

                {/* Видео */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
                    {/* Видео 1 */}
                    <div className="relative rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-[600px] object-cover rounded-[32px]"
                        >
                            <source src="/v1.mp4" type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                        <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-all duration-300"></div>
                    </div>

                    {/* Видео 2 */}
                    <div className="relative rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-[600px] object-cover rounded-[32px]"
                        >
                            <source src="/v2.mp4" type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                        <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-all duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
