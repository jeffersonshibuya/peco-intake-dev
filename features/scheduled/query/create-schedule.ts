"use server";
import { db } from "@/db/drizzle";
import { scheduled } from "@/db/schema";
import { ScheduleFormValues } from "../types";

export const createSchedule = async (values: ScheduleFormValues) => {
  const data = await db.insert(scheduled).values(values).returning();
  return data;
};
