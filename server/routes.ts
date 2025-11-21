import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const result = insertWaitlistSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      const entry = await storage.addToWaitlist(result.data);
      return res.status(201).json({ success: true, data: entry });
    } catch (error: any) {
      if (error.code === '23505') {
        return res.status(409).json({ error: "Email already registered" });
      }
      console.error("Error adding to waitlist:", error);
      return res.status(500).json({ error: "Failed to join waitlist" });
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
