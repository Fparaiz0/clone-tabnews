// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validação
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: "Todos os campos são obrigatórios",
      });
    }

    // Configurar transporte - MÉTODO CORRETO
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verificar configuração
    await transporter.verify();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📧 Portfólio: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #084734;">🎯 Novo Contato Recebido</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #084734;">
            <p><strong>👤 Nome:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📝 Assunto:</strong> ${subject}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #084734;">💬 Mensagem:</h3>
            <div style="background: white; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="border-top: 1px solid #eee; padding-top: 15px; color: #666; font-size: 12px;">
            <p>🕒 Enviado em: ${new Date().toLocaleString("pt-BR")}</p>
            <p>🌐 Via: Portfolio Felipe Paraizo</p>
          </div>
        </div>
      `,
    };

    // Enviar email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email enviado:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("❌ Erro detalhado:", error);

    let errorMessage = "Erro ao enviar mensagem. Tente novamente.";

    if (error.code === "EAUTH") {
      errorMessage =
        "Erro de autenticação. Verifique as configurações de email.";
    } else if (error.code === "ECONNECTION") {
      errorMessage = "Erro de conexão. Verifique sua internet.";
    }

    return res.status(500).json({
      error: errorMessage,
    });
  }
}
