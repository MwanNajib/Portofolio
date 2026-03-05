import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, email, message } = body;

    // Pastikan semua form sudah terisi
    if (!name || !email || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: "All fields are required",
      });
    }

    // 1. Konfigurasi Transporter Nodemailer untuk Gmail
    // Anda harus meletakkan 'EMAIL_USER' dan 'EMAIL_PASS' ini di dalam file .env
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Contoh: 'muhammadwisnuainunnajib@gmail.com'
        pass: process.env.EMAIL_PASS, // Sandi Aplikasi (bukan password akun Anda)
      },
    });

    // 2. Format Email yang Akan Diterima
    const mailOptions = {
      from: `"${name} (Portofolio)" <${process.env.EMAIL_USER}>`,
      to: "muhammadwisnuainunnajib@gmail.com", // Tujuan Email Utama Anda
      replyTo: email, // Jika Anda membalas, maka membalas ke email si pengirim
      subject: `New Message from ${name} via Contact Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <h2 style="color: #0a66c2;">New Contact Message! 🚀</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #ddd; margin: 20px 0;" />
          <h4 style="margin-bottom: 5px;">Message:</h4>
          <p style="white-space: pre-wrap; color: #333;">${message}</p>
          <hr style="border: 1px solid #ddd; margin: 20px 0;" />
          <small style="color: #888;">This email was sent from your Portfolio Contact Form.</small>
        </div>
      `,
    };

    // 3. Eksekusi Kirim Email
    const info = await transporter.sendMail(mailOptions);

    return { success: true, message: "Pesan berhasil dikirim!" };
  } catch (error) {
    console.error("Gagal mengirim email:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Pesan gagal dikirim. Periksa konfigurasi email SMTP.",
    });
  }
});
