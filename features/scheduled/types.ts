import { insertScheduledSchema } from "@/db/schema";
import { UseFormReturnType } from "@mantine/form";
import { z } from "zod";

export type ScheduledFormValues = {
  woNbr: number | undefined;
  woDescription: string | undefined;
  woProgram: string | undefined;
  woRetirementGroup: string | undefined;

  //  Scheduled
  scheduledStart: Date | undefined;
  scheduledMainInstallComplete: Date | undefined;
  scheduledGasOnComplete: Date | undefined;
  scheduledServicesStart: Date | undefined;
  scheduledAllServicesComplete: Date | undefined;
  scheduledRetirementComplete: Date | undefined;

  // Main
  actualMainInstallFeet: number | undefined;
  targetMainInstallFeet: number | undefined;
  updatedMainInstallFeet: number | undefined;
  pctMainInstalled: number | undefined;

  // Services
  actualNbrServicesComplete: number | undefined;
  updatedServices: number | undefined;
  targetServices: number | undefined;
  pctServicesComplete: number | undefined;

  // Retired
  actualFtRetiredPerAsBuiltOutmoded: number | undefined;
  targetFtRetiredOutmoded: number | undefined;
  pctRetiredOutmodedComplete: number | undefined;
  actualFtRetiredPerAsBuiltNonOutmoded: number | undefined;
  targetFtRetiredNonOutmoded: number | undefined;
  pctRetiredNonOutmodedComplete: number | undefined;

  // Actual and final
  actualStart: Date | undefined;
  actualMainInstallComplete: Date | undefined;
  actualGasOnComplete: Date | undefined;
  actualServicesStart: Date | undefined;
  actualAllServicesComplete: Date | undefined;
  actualRetirementComplete: Date | undefined;
  actualPackageSubmittedDate: Date | undefined;
  actualRetorationTicketSubmittedDate: Date | undefined;
  finalInvoiceDateSubmitted: Date | undefined;
  weekEnding: Date | undefined;
  scopeYear: number | undefined;
  cocRegion: Date | undefined;
  buildingCoc: string | undefined;
  polSub: number | undefined;

  // Permit remarks
  permitRemarks: string | undefined;

  // Permits
  statePermitStatus: string | undefined;
  statePermitExpiration: string | undefined;
  localPermitStatus: string | undefined;
  localPermitExpiration: string | undefined;
  mrInfo: string | undefined;
  mrNeedDate: string | undefined;
  soilTestDate: string | undefined;
  soiltTestStatus: string | undefined;
  procedureStatus: string | undefined;
  gasOnProcedureRequired: string | undefined;
  retirementProcedureRequired: string | undefined;
  commentsFromPv: string | undefined;
  carryOverFromPriorYear: string | undefined;
  pullForward: string | undefined;
  waf: string | undefined;
  soiltTest: string | undefined;
};

export type ScheduledFormProps = {
  form: UseFormReturnType<ScheduledFormValues>;
};

export type ScheduleFormValues = z.input<typeof insertScheduledSchema>;
