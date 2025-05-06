import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getSchedule } from "../query/get-schedule";

export const useGetSchedule = (id: string) => {
  const query = useQuery({
    queryKey: ["scheduled", { id }],
    queryFn: async () => {
      const data = await getSchedule(id);
      return data;
    },
    placeholderData: keepPreviousData,
  });

  return query;
};
