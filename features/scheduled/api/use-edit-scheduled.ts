import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSchedule } from "../query/update-scheduled";
import { ScheduleFormValues } from "../types";

export const useEditSchedule = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (json: ScheduleFormValues) => {
      const response = await updateSchedule({ id, values: json });
      if (response?.success) {
        return response;
      }
      throw new Error("Failed to update");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
      queryClient.invalidateQueries({ queryKey: ["scheduled", { id }] });
      // toast.success("Category updated");
    },
    onError: () => {
      // toast.error("Failed to update category");
      console.log("Failed on update scheduled");
    },
  });

  return mutation;
};
