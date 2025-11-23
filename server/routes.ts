import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { sendWaitlistConfirmation } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const result = insertWaitlistSchema.safeParse(req.body);
      
      if (!result.success) {
        console.error("Validation failed:", result.error);
        return res.status(400).json({ error: "Invalid email format" });
      }

      const entry = await storage.addToWaitlist(result.data);
      
      // Send confirmation email (non-blocking)
      const emailSent = await sendWaitlistConfirmation(result.data.name, result.data.email);
      
      return res.status(201).json({ 
        success: true, 
        data: entry,
        emailSent 
      });
    } catch (error: any) {
      if (error.code === '23505') {
        return res.status(409).json({ error: "Email already registered" });
      }
      console.error("Error adding to waitlist:", error);
      console.error("Error details:", {
        message: error.message,
        code: error.code,
        stack: error.stack
      });
      return res.status(500).json({ 
        error: "Failed to join waitlist",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  });

  app.get("/api/waitlist/count", async (req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      return res.json({ count });
    } catch (error) {
      console.error("Error getting waitlist count:", error);
      return res.status(500).json({ error: "Failed to get count" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
