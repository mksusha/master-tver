import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, phone, message } = await req.json();

        // ⚙️ Настраиваем транспорт (замени на свои SMTP-данные)
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER, // твой email
                pass: process.env.MAIL_PASS, // пароль/ключ приложения
            },
        });

        // ✉️ Формируем письмо
        await transporter.sendMail({
            from: `"Сайт Studio Concept" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO || process.env.MAIL_USER, // куда получать письма
            subject: "Новая заявка с сайта",
            html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Сообщение:</strong> ${message || "—"}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Ошибка при отправке:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
