"use server";

import { db } from "@/db/drizzle";
import { scheduledChanges } from "@/db/schema";
import { eq } from "drizzle-orm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ScheduledData = Record<string, any>; // can customize further if needed

export type ChangeEntry = {
  version: number;
  changedAt: Date | null;
  data: ScheduledData;
};

export async function getScheduledHistory(
  scheduledId: string
): Promise<ChangeEntry[]> {
  const rows = await db
    .select({
      version: scheduledChanges.version,
      changedAt: scheduledChanges.changedAt,
      data: scheduledChanges.data,
    })
    .from(scheduledChanges)
    .where(eq(scheduledChanges.scheduledId, scheduledId))
    .orderBy(scheduledChanges.version);

  return rows.map((row) => ({
    version: row.version,
    changedAt: row.changedAt,
    data: row.data as ScheduledData, // 👈 Cast to correct type
  }));
}
