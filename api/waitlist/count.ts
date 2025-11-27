import 'dotenv/config';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../lib/storage';

// Enable CORS
function enableCORS(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  enableCORS(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const count = await storage.getWaitlistCount();
      return res.json({ count });
    } catch (error: any) {
      console.error("Error getting waitlist count:", error);
      return res.status(500).json({ error: "Failed to get count", details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}

