import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { answers, phone, contactMethod } = await req.json();

        // ⚙️ Настройка транспорта
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Формируем письмо
        const formattedAnswers = Object.entries(answers)
            .map(([step, answer]) => `<p><strong>Вопрос ${+step + 1}:</strong> ${answer}</p>`)
            .join("");

        await transporter.sendMail({
            from: `"Квиз с сайта" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO || process.env.MAIL_USER,
            subject: "Новая заявка с квиза",
            html: `
        <h2>Новая заявка с квиза</h2>
        ${formattedAnswers}
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Контакт через:</strong> ${contactMethod}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Ошибка при отправке:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
