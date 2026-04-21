import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, phone, message } = await req.json();

                const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Сайт Studio Concept" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_TO || process.env.MAIL_USER,
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
