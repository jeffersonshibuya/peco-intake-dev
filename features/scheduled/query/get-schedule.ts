"use server";

import { db } from "@/db/drizzle";
import { scheduled } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getSchedule = async (id: string) => {
  const data = await db.query.scheduled.findFirst({
    where: eq(scheduled.id, id),
  });
  return data;
};
