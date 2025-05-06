"use server";

import { db } from "@/db/drizzle";
import { ScheduleFormValues } from "../types";
import { eq } from "drizzle-orm";
import { scheduled } from "@/db/schema";

interface updateScheduledProps {
  values: ScheduleFormValues;
  id: string;
}

export const updateSchedule = async ({ values, id }: updateScheduledProps) => {
  try {
    if (!id) throw new Error("Missing ID");
    await db.transaction(async (trx) => {
      await trx
        .update(scheduled)
        .set({ ...values })
        .where(eq(scheduled.id, id));
      // const oldScheduled = (await trx.query.scheduled.findFirst({
      //   where: eq(scheduled.id, id),
      // })) as ScheduleFormValues;

      // if (!oldScheduled) throw new Error("Scheduled not found");

      // // Compute changed fields
      // const changes: Record<string, [any, any]> = {};
      // for (const key of Object.keys(values) as (keyof ScheduleFormValues)[]) {
      //   if (values[key] !== undefined && values[key] !== oldScheduled[key]) {
      //     changes[key] = [oldScheduled[key], values[key]];
      //   }
      // }

      // // console.log(values);

      // // Only update and log if something changed
      // await db
      //   .update(scheduled)
      //   .set({ ...values })
      //   .where(eq(scheduled.id, id));

      // if (Object.keys(changes).length > 0) {
      //   console.log('add changed', );
      //   // await db.insert(scheduledChanges).values({
      //   //   scheduledId: id,
      //   //   operation: "UPDATE",
      //   //   changedFields: changes,
      //   // });
      // }
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
