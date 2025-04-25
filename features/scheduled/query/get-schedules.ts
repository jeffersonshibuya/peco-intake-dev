"use server";

import { mockWorkOrders } from "@/data/mock-wo";
import { db } from "@/db/drizzle";

export const getSchedules = async () => {
  const data = await db.query.scheduled.findMany();
  const dataParsed = data.map((schedule) => {
    const woInfo = mockWorkOrders.find((wo) => wo.wo_nbr === schedule.woNbr);
    return {
      ...schedule,
      woDescription: woInfo?.description,
      woPrograma: woInfo?.program,
      woRetirementGroup: woInfo?.retirement_group,
    };
  });
  return dataParsed;
};
