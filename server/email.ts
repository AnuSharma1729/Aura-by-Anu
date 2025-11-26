import { Resend } from 'resend';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    throw new Error('RESEND_API_KEY and RESEND_FROM_EMAIL must be set');
  }

  return {
    client: new Resend(apiKey),
    fromEmail: fromEmail
  };
}

export async function sendWaitlistConfirmation(name: string, email: string): Promise<boolean> {
  try {
    const {client, fromEmail} = getResendClient();
    
    const { data, error } = await client.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Welcome to Aura — Your Journey Begins Now',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="font-size: 48px; font-weight: bold; margin: 0; color: #DAA520;">Aura</h1>
            <p style="font-size: 14px; color: #666; margin: 8px 0 0 0; letter-spacing: 2px;">BY ANU</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%); border: 1px solid #e0e0e0; padding: 30px; border-radius: 8px;">
            <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Hi ${name},</p>
            
            <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              Thank you for joining the waitlist for <strong style="color: #DAA520;">Aura</strong> <strong>By Anu</strong>.
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              What you did today may seem small — just typing your email and hitting submit —
              but it's actually a significant first step toward transforming the way you present yourself to the world.
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              I built <strong style="color: #DAA520;">Aura</strong> because every opportunity I unlocked in my life — getting into Google, growing on social media, being noticed by brands — all came from one thing: <strong>the way I showed up</strong>.
              My presentation opened doors long before my résumé reached anyone's desk.
              And the simplest, most powerful part of that presentation?
              <strong>Wearing the right outfit.</strong>
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              That's the magic I want to bring to you.
              And by joining the waitlist, you've already taken the first step toward endless opportunities.
              A chance to be more. To stand out more. To own every room you walk into.
              To be extra — in the best way.
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              I can't wait for you to experience what we're building.
              <strong style="color: #DAA520;">Aura</strong> <strong>is coming very soon to your inbox.</strong>
            </p>
            
            <p style="font-size: 16px; line-height: 1.8; margin: 30px 0 0 0;">
              With love,<br>
              <strong>Team <span style="color: #DAA520;">Aura</span> by Anu</strong>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #e0e0e0;">
            <p style="font-size: 12px; color: #999; margin: 0;">
              © 2025 <span style="color: #DAA520;">Aura</span> Intelligence Inc. All rights reserved.
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error sending email:', error);
      return false;
    }

    console.log('Email sent successfully:', data);
    return true;
  } catch (error) {
    console.error('Failed to send waitlist confirmation email:', error);
    return false;
  }
}
