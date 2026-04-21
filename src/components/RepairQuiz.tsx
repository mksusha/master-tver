"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

interface Question {
    question: string;
    options: string[];
    image?: string;
    imageOptions?: string[];
}

const questions: Question[] = [
    {
        question: "Ремонт какого объекта вас интересует?",
        options: ["Новостройка", "Дом", "Вторичное жильё", "Коммерческая недвижимость"],
        imageOptions: ["/vtorichka.jpg", "/дом.jpg", "/вторичка.jpg", "/комерция.jpg"],
    },
    {
        question: "Укажите общую площадь помещений, кв.м.",
        options: ["До 30 кв.м.", "30-70 кв.м", "70-100 кв.м", "100-200 кв.м", "свыше 200 кв.м", ],
    },
    {
        question: "Какой вид ремонта вас интересует?",
        options: [
            "Косметический ремонт",
            "Капитальный ремонт",
            "Ремонт по дизайн-проекту",
            "Не знаю, нужна консультация",
        ],
        imageOptions: [
            "/first-blok2.jpg",
            "/first-blok12.jpg",
            "/first-blok15.jpg",
            "/first-blok18.jpg",
        ],
    },
    {
        question: "Сколько комнат в квартире?",
        options: ["Частичный ремонт", "Студия",  "1 комната", "2 комнаты", "3 комнаты", "4 и более комнат"],
    },
    {
        question: "У вас уже есть дизайн-проект?",
        options: ["Да", "Планирую заказать", "Нет и не будет"],
        image: "/quiz/project.jpg",
    },
    {
        question: "Когда планируете начать ремонт?",
        options: [
            "В течение недели (очень срочно)",
            "В течение месяца (не так уж срочно)",
            "Ждём ключи от квартиры",
            "Просто интересуюсь",
        ],
        image: "/quiz/keys.jpg",
    },
];

export default function QuizSection() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [phone, setPhone] = useState("");
    const [consent, setConsent] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [contactMethod, setContactMethod] = useState("");

    const totalSteps = questions.length + 1;
    const current = questions[step];

    const nextStep = () => {
        if (step < questions.length) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 0) setStep(step - 1);
    };

    const handleOptionSelect = (option: string) => {
        setAnswers({ ...answers, [step]: option });
                setTimeout(() => {
            if (step < questions.length) nextStep();
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone || !consent || !contactMethod) return;

        try {
            const res = await fetch("/api/quiz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ answers, phone, contactMethod }),
            });

            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
            } else {
                alert("Ошибка отправки, попробуйте позже");
            }
        } catch (err) {
            console.error(err);
            alert("Ошибка отправки, попробуйте позже");
        }
    };


    return (
        <section className="max-w-[1600px] px-4 md:px-8 m-auto">
            <section className="flex flex-col md:flex-row h-auto md:h-[700px] max-w-[1600px] bg-[#f8f8f8] pl-4 md:pl-8 m-auto rounded-3xl overflow-hidden shadow-lg">
                {}
                <div className="relative flex flex-col justify-between w-full md:w-[70%] p-6 md:p-12 h-full">
                    {}
                    {!submitted && (
                        <div className="mb-4">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                                <div
                                    className="h-full bg-[#B49C6C] transition-all duration-500"
                                    style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-500 text-center md:text-left">
                                Шаг {step + 1}/{totalSteps}
                            </p>
                        </div>
                    )}

                                        <div className="flex flex-col flex-grow overflow-hidden">
                        {!submitted ? (
                            step < questions.length ? (
                                <>
                                    <h2 className="text-2xl md:text-3xl font-medium text-[#B49C6C] mb-2 md:mb-8 h-[80px] flex items-center justify-center md:justify-start text-center md:text-left">
                                        {current.question}
                                    </h2>

                                                                        {current.imageOptions ? (
                                        <div className="flex flex-col sm:flex-row md:h-auto flex-wrap gap-4  h-[500px] w-full">
                                            {current.options.map((option, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleOptionSelect(option)}
                                                    className={`relative flex-1 rounded-2xl m-1 overflow-hidden transition-all duration-300 ${
                                                        answers[step] === option
                                                            ? "ring-4 ring-[#B49C6C]"
                                                            : "hover:ring-2 hover:ring-[#B49C6C]/60"
                                                    } h-auto md:min-h-[390px]`}
                                                >
                                                    <Image
                                                        src={current.imageOptions![i]}
                                                        alt={option}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-all"></div>
                                                    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-medium drop-shadow-lg">
                                                        {option}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        // Текстовые ответы
                                        <div className="grid grid-cols-1 sm:grid-cols-2 h-auto gap-4">
                                            {current.options.map((option, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleOptionSelect(option)}
                                                    className={`h-20 border rounded-2xl text-gray-700 font-medium transition-all duration-300 hover:shadow-md hover:border-[#B49C6C] ${
                                                        answers[step] === option
                                                            ? "border-[#B49C6C] bg-[#fffaf2]"
                                                            : "border-gray-200 bg-white"
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                // Финальная форма
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-4 mt-8 max-w-sm mx-auto"
                                >
                                    <h2 className="text-2xl md:text-3xl font-medium text-[#B49C6C] mb-2 text-center">
                                        Последний шаг
                                    </h2>
                                    <p className="text-gray-600 mb-4 text-center">
                                        Оставьте телефон, и мы свяжемся с вами для уточнения деталей.
                                    </p>

                                    <input
                                        type="tel"
                                        placeholder="+7 (___) ___-__-__"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="border rounded-lg px-4 py-3 w-full"
                                        required
                                    />

                                    <p className="text-gray-700 text-sm mt-2 text-center">
                                        Куда удобнее отправить?
                                    </p>

                                    <div className="flex justify-center gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setContactMethod("Telegram")}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                                                contactMethod === "Telegram"
                                                    ? "bg-[#B49C6C] text-white"
                                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                            }`}
                                        >
                                            <FaTelegramPlane /> Telegram
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setContactMethod("WhatsApp")}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                                                contactMethod === "WhatsApp"
                                                    ? "bg-[#B49C6C] text-white"
                                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                            }`}
                                        >
                                            <FaWhatsapp /> WhatsApp
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setContactMethod("Phone")}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                                                contactMethod === "Phone"
                                                    ? "bg-[#B49C6C] text-white"
                                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                            }`}
                                        >
                                            <FaPhoneAlt /> Звонок
                                        </button>
                                    </div>

                                    <label className="flex items-center gap-2 text-sm text-gray-600">
                                        <input
                                            type="checkbox"
                                            checked={consent}
                                            onChange={(e) => setConsent(e.target.checked)}
                                            required
                                        />
                                        Я согласен на обработку персональных данных
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={!phone || !consent || !contactMethod}
                                        className="mt-2 bg-[#B49C6C] text-white py-3 rounded-full font-medium hover:opacity-90 disabled:opacity-50 transition-all"
                                    >
                                        Отправить
                                    </button>
                                </form>
                            )
                        ) : (
                            // Экран "Спасибо"
                            <div className="flex flex-col items-center md:mt-[25%] justify-center text-center px-4">
                                <h2 className="text-3xl md:text-6xl font-medium text-[#B49C6C] mb-4">
                                    Спасибо!
                                </h2>
                                <p className="text-gray-600 text-xl max-w-[400px]">
                                    Мы свяжемся с вами в ближайшее время для уточнения деталей.
                                </p>
                            </div>
                        )}
                    </div>

                                        {!submitted && step < questions.length && (
                        <div className="flex justify-between mt-8">
                            <button
                                onClick={prevStep}
                                disabled={step === 0}
                                className="px-6 py-2 rounded-full border text-gray-600 hover:bg-gray-100 disabled:opacity-30"
                            >
                                Назад
                            </button>
                        </div>
                    )}
                </div>

                                <div className="relative w-[30%] h-full hidden md:block">
                    <Image src="/fb1.png" alt="quiz side" fill className="object-cover" />
                </div>
            </section>
        </section>
    );
}
