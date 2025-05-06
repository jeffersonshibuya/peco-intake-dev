import {
  ScheduledFormValues,
  ScheduledResponseValues,
} from "@/features/scheduled/types";
import dayjs from "dayjs";

export function normalizeSchedule(
  data: ScheduledResponseValues
): ScheduledFormValues {
  return {
    ...data,
    permitRemarks: data.permitRemarks ?? undefined,
    scheduledStart: data.scheduledStart
      ? dayjs(data.scheduledStart).toDate()
      : null,
    scheduledMainInstallComplete: data.scheduledMainInstallComplete
      ? dayjs(data.scheduledMainInstallComplete).toDate()
      : null,
    scheduledGasOnComplete: data.scheduledGasOnComplete
      ? dayjs(data.scheduledGasOnComplete).toDate()
      : null,
    scheduledAllServicesComplete: data.scheduledAllServicesComplete
      ? dayjs(data.scheduledAllServicesComplete).toDate()
      : null,
    scheduledRetirementComplete: data.scheduledRetirementComplete
      ? dayjs(data.scheduledRetirementComplete).toDate()
      : null,
    scheduledServicesStart: data.scheduledServicesStart
      ? dayjs(data.scheduledServicesStart).toDate()
      : null,
    actualStart: data.actualStart ? dayjs(data.actualStart).toDate() : null,
    actualMainInstallComplete: data.actualMainInstallComplete
      ? dayjs(data.actualMainInstallComplete).toDate()
      : null,
    actualGasOnComplete: data.actualGasOnComplete
      ? dayjs(data.actualGasOnComplete).toDate()
      : null,
    actualServicesStart: data.actualServicesStart
      ? dayjs(data.actualServicesStart).toDate()
      : null,
    actualAllServicesComplete: data.actualAllServicesComplete
      ? dayjs(data.actualAllServicesComplete).toDate()
      : null,
    actualRetirementComplete: data.actualRetirementComplete
      ? dayjs(data.actualRetirementComplete).toDate()
      : null,
    actualPackageSubmittedDate: data.actualPackageSubmittedDate
      ? dayjs(data.actualPackageSubmittedDate).toDate()
      : null,
    actualRetorationTicketSubmittedDate:
      data.actualRetorationTicketSubmittedDate
        ? dayjs(data.actualRetorationTicketSubmittedDate).toDate()
        : null,
    finalInvoiceDateSubmitted: data.finalInvoiceDateSubmitted
      ? dayjs(data.finalInvoiceDateSubmitted).toDate()
      : null,
    weekEnding: data.weekEnding ? dayjs(data.weekEnding).toDate() : null,
  };
}
