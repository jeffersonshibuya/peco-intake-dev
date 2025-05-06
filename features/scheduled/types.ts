import { insertScheduledSchema } from "@/db/schema";
import { UseFormReturnType } from "@mantine/form";
import { z } from "zod";

export type ScheduledFormValues = {
  woNbr: number | undefined;
  woDescription?: string | undefined;
  woProgram?: string | undefined;
  woRetirementGroup?: string | undefined;

  //  Scheduled
  scheduledStart?: Date | undefined | null;
  scheduledMainInstallComplete?: Date | undefined | null;
  scheduledGasOnComplete?: Date | undefined | null;
  scheduledServicesStart?: Date | undefined | null;
  scheduledAllServicesComplete?: Date | undefined | null;
  scheduledRetirementComplete?: Date | undefined | null;

  // Main
  actualMainInstallFeet?: number | undefined | null;
  targetMainInstallFeet?: number | undefined | null;
  updatedMainInstallFeet?: number | undefined | null;
  pctMainInstalled?: number | undefined | null;

  // Services
  actualNbrServicesComplete?: number | undefined | null;
  updatedServices?: number | undefined | null;
  targetServices?: number | undefined | null;
  pctServicesComplete?: number | undefined | null;

  // Retired
  actualFtRetiredPerAsBuiltOutmoded?: number | undefined | null;
  targetFtRetiredOutmoded?: number | undefined | null;
  pctRetiredOutmodedComplete?: number | undefined | null;
  actualFtRetiredPerAsBuiltNonOutmoded?: number | undefined | null;
  targetFtRetiredNonOutmoded?: number | undefined | null;
  pctRetiredNonOutmodedComplete?: number | undefined | null;

  // Actual and final
  actualStart?: Date | undefined | null;
  actualMainInstallComplete?: Date | undefined | null;
  actualGasOnComplete?: Date | undefined | null;
  actualServicesStart?: Date | undefined | null;
  actualAllServicesComplete?: Date | undefined | null;
  actualRetirementComplete?: Date | undefined | null;
  actualPackageSubmittedDate?: Date | undefined | null;
  actualRetorationTicketSubmittedDate?: Date | undefined | null;
  finalInvoiceDateSubmitted?: Date | undefined | null;
  weekEnding?: Date | undefined | null;
  scopeYear?: number | undefined | null;
  cocRegion?: string | undefined | null;
  buildingCoc?: string | undefined | null;
  polSub?: number | undefined | null;

  // Permit remarks
  permitRemarks?: string | undefined | null;

  // Permits
  statePermitStatus?: string | undefined | null;
  statePermitExpiration?: string | undefined | null;
  localPermitStatus?: string | undefined | null;
  localPermitExpiration?: string | undefined | null;
  mrInfo?: string | undefined | null;
  mrNeedDate?: string | undefined | null;
  soilTestDate?: string | undefined | null;
  soiltTestStatus?: string | undefined | null;
  procedureStatus?: string | undefined | null;
  gasOnProcedureRequired?: string | undefined | null;
  retirementProcedureRequired?: string | undefined | null;
  commentsFromPv?: string | undefined | null;
  carryOverFromPriorYear?: string | undefined | null;
  pullForward?: string | undefined | null;
  waf?: string | undefined | null;
  soiltTest?: string | undefined | null;
};

export type ScheduledResponseValues = {
  woNbr: number | undefined;
  woDescription?: string | undefined;
  woProgram?: string | undefined;
  woRetirementGroup?: string | undefined;

  //  Scheduled
  scheduledStart?: string | null;
  scheduledMainInstallComplete?: string | null;
  scheduledGasOnComplete?: string | null;
  scheduledServicesStart?: string | null;
  scheduledAllServicesComplete?: string | null;
  scheduledRetirementComplete?: string | null;

  // Main
  actualMainInstallFeet?: number | null;
  targetMainInstallFeet?: number | null;
  updatedMainInstallFeet?: number | null;
  pctMainInstalled?: number | null;

  // Services
  actualNbrServicesComplete?: number | null;
  updatedServices?: number | null;
  targetServices?: number | null;
  pctServicesComplete?: number | null;

  // Retired
  actualFtRetiredPerAsBuiltOutmoded?: number | null;
  targetFtRetiredOutmoded?: number | null;
  pctRetiredOutmodedComplete?: number | null;
  actualFtRetiredPerAsBuiltNonOutmoded?: number | null;
  targetFtRetiredNonOutmoded?: number | null;
  pctRetiredNonOutmodedComplete?: number | null;

  // Actual and final
  actualStart?: string | null;
  actualMainInstallComplete?: string | null;
  actualGasOnComplete?: string | null;
  actualServicesStart?: string | null;
  actualAllServicesComplete?: string | null;
  actualRetirementComplete?: string | null;
  actualPackageSubmittedDate?: string | null;
  actualRetorationTicketSubmittedDate?: string | null;
  finalInvoiceDateSubmitted?: string | null;
  weekEnding?: string | null;
  scopeYear?: number | null;
  cocRegion?: string | null;
  buildingCoc?: string | null;
  polSub?: number | null;

  // Permit remarks
  permitRemarks?: string | null;

  // Permits
  statePermitStatus?: string | null;
  statePermitExpiration?: string | null;
  localPermitStatus?: string | null;
  localPermitExpiration?: string | null;
  mrInfo?: string | null;
  mrNeedDate?: string | null;
  soilTestDate?: string | null;
  soiltTestStatus?: string | null;
  procedureStatus?: string | null;
  gasOnProcedureRequired?: string | null;
  retirementProcedureRequired?: string | null;
  commentsFromPv?: string | null;
  carryOverFromPriorYear?: string | null;
  pullForward?: string | null;
  waf?: string | null;
  soiltTest?: string | null;
};

export type ScheduledFormProps = {
  form: UseFormReturnType<ScheduledFormValues>;
};

export type ScheduleFormValues = z.output<typeof insertScheduledSchema>;
