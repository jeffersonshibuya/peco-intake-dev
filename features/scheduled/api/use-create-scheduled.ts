import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSchedule } from "../query/create-schedule";
import { ScheduleFormValues } from "../types";

export const useCreateSchedule = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values: ScheduleFormValues) => {
      const response = await createSchedule(values);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
    },
  });

  return mutation;
};
