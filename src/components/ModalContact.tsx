"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ModalContactProps {
    open: boolean;
    onClose: () => void;
}

export default function ModalContact({ open, onClose }: ModalContactProps) {
    const [form, setForm] = useState({ name: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Сброс формы при открытии модалки
    useEffect(() => {
        if (open) {
            setForm({ name: "", phone: "", message: "" });
            setSuccess(false);
            setLoading(false);
        }
    }, [open]);

    if (!open) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === "phone") {
            const onlyDigits = e.target.value.replace(/\D/g, "");
            setForm({ ...form, phone: onlyDigits });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const res = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSuccess(true);
            } else {
                console.error("Ошибка при отправке письма");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-[1000]">
            <div className="relative bg-white rounded-3xl p-8 w-[90%] max-w-[480px] shadow-2xl animate-fade-in">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
                    aria-label="Закрыть"
                >
                    <X size={24} />
                </button>

                {!success ? (
                    <>
                        <h2 className="text-2xl text-center text-gray-800 mb-4">Связаться с нами</h2>
                        <p className="text-center text-gray-600 mb-6">
                            Оставьте ваши данные — мы перезвоним и обсудим проект
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Ваше имя"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B49C6C]/60 transition"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Телефон"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B49C6C]/60 transition"
                            />
                            <textarea
                                name="message"
                                placeholder="Комментарий (необязательно)"
                                rows={3}
                                value={form.message}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#B49C6C]/60 transition resize-none"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-gradient-to-r from-[#B49C6C] to-[#ccb689] text-white rounded-xl py-3 hover:opacity-90 transition disabled:opacity-70"
                            >
                                {loading ? "Отправка..." : "Отправить"}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-3 py-6 px-4 bg-gradient-to-r from-[#B49C6C] to-[#ccb689] rounded-2xl animate-fade-in text-white">
                        <p className="text-center text-lg font-medium">
                            Сообщение отправлено! Мы свяжемся с вами.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
