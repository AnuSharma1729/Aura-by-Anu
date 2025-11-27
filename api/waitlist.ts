import 'dotenv/config';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from './lib/storage.js';
import { insertWaitlistSchema } from './lib/schema.js';
import { sendWaitlistConfirmation } from './lib/email.js';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      console.log('Waitlist request received:', { body: req.body });

      // Check environment variables
      if (!process.env.DATABASE_URL) {
        console.error('DATABASE_URL is not set');
        return res.status(500).json({ 
          error: "Server configuration error",
          details: "Database connection not configured"
        });
      }

      const result = insertWaitlistSchema.safeParse(req.body);
      
      if (!result.success) {
        console.error("Validation failed:", result.error);
        return res.status(400).json({ error: "Invalid email format", details: result.error.errors });
      }

      const entry = await storage.addToWaitlist(result.data);
      console.log('Waitlist entry created:', entry.id);
      
      // Send confirmation email (non-blocking)
      let emailSent = false;
      try {
        emailSent = await sendWaitlistConfirmation(result.data.name, result.data.email);
      } catch (emailError: any) {
        console.error('Email send failed (non-blocking):', emailError.message);
        // Continue even if email fails
      }
      
      return res.status(201).json({ 
        success: true, 
        data: entry,
        emailSent 
      });
    } catch (error: any) {
      console.error("Error adding to waitlist:", {
        message: error.message,
        code: error.code,
        stack: error.stack
      });

      if (error.code === '23505') {
        return res.status(200).json({ 
          success: true,
          alreadyRegistered: true,
          message: "Already registered, I know you're excited but you're already in"
        });
      }

      return res.status(500).json({ 
        error: "Failed to join waitlist",
        details: process.env.NODE_ENV === 'development' ? error.message : "Please try again later"
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

