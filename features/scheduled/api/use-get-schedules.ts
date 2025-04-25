import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getSchedules } from "../query/get-schedules";

export const useGetSchedules = () => {
  const query = useQuery({
    queryKey: ["schedules"],
    queryFn: async () => {
      const data = await getSchedules();
      return data;
    },
    placeholderData: keepPreviousData,
  });

  return query;
};
