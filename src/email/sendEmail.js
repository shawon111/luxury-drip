// utils/sendEmail.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send an email via Resend
 * @param {Object} param0
 * @param {string} param0.to - Receiver email address
 * @param {string} param0.subject - Subject line
 * @param {string} param0.text - Plain text body
 * @param {string} [param0.html] - Optional HTML body
 */
export async function sendEmail({ to, subject, text, html }) {
  try {
    const data = await resend.emails.send({
      from: 'Your Store <you@yourdomain.com>', // Must be verified in Resend
      to,
      subject,
      text,
      html,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error };
  }
}
