import { db } from "./db";
import { waitlist, type InsertWaitlist, type Waitlist } from "./schema";

export interface IStorage {
  addToWaitlist(email: InsertWaitlist): Promise<Waitlist>;
  getWaitlistCount(): Promise<number>;
}

export class DbStorage implements IStorage {
  async addToWaitlist(data: InsertWaitlist): Promise<Waitlist> {
    const [entry] = await db.insert(waitlist).values(data).returning();
    return entry;
  }

  async getWaitlistCount(): Promise<number> {
    const result = await db.select().from(waitlist);
    return result.length;
  }
}

export const storage = new DbStorage();

