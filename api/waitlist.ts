import 'dotenv/config';
import type { VercelRequest, VercelResponse } from '@vercel/node';

let storage: any;
let insertWaitlistSchema: any;
let sendWaitlistConfirmation: any;

// Lazy load modules to catch initialization errors
async function loadModules() {
  if (!storage) {
    try {
      const storageModule = await import('../server/storage');
      const schemaModule = await import('../shared/schema');
      const emailModule = await import('../server/email');
      storage = storageModule.storage;
      insertWaitlistSchema = schemaModule.insertWaitlistSchema;
      sendWaitlistConfirmation = emailModule.sendWaitlistConfirmation;
    } catch (error: any) {
      console.error('Failed to load modules:', error);
      throw new Error(`Module loading failed: ${error.message}`);
    }
  }
  return { storage, insertWaitlistSchema, sendWaitlistConfirmation };
}

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

      // Load modules
      await loadModules();
      
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
        return res.status(409).json({ error: "Email already registered" });
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

