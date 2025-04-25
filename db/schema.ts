import { date, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

function snakeCase(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export const scheduled = pgTable("scheduled", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey(),
  woNbr: integer("wo_nbr").notNull(),

  // Scheduled
  scheduledStart: date("scheduled_start").notNull(),
  scheduledMainInstallComplete: date("scheduled_main_install_complete"),
  scheduledGasOnComplete: date("scheduled_gas_on_complete"),
  scheduledAllServicesComplete: date("scheduled_all_services_complete"),
  scheduledRetirementComplete: date("scheduled_retirement_complente"),

  // Main
  actualMainInstallFeet: integer("actual_main_install_feet"),
  targetMainInstallFeet: integer("target_main_install_feet"),
  pctMainInstalled: integer("pct_main_installed"),

  // Services
  actualNbrServicesComplete: integer("actual_nbr_services_complete"),
  updatedServices: integer(snakeCase("updatedServices")),
  targetServices: integer("target_services"),
  pctServicesComplete: integer("pct_services_complete"),

  // Retired
  actualFtRetiredPerAsBuiltOutmoded: integer(
    snakeCase("actualFtRetiredPerAsBuiltOutmoded")
  ),
  targetFtRetiredOutmoded: integer(snakeCase("targetFtRetiredOutmoded")),
  pctRetiredOutmodedComplete: integer(snakeCase("pctRetiredOutmodedComplete")),
  actualFtRetiredPerAsBuiltNonOutmoded: integer(
    snakeCase("actualFtRetiredPerAsBuiltNonOutmoded")
  ),
  targetFtRetiredNonOutmoded: integer(snakeCase("targetFtRetiredNonOutmoded")),
  pctRetiredNonOutmodedComplete: integer(
    snakeCase("pctRetiredNonOutmodedComplete")
  ),

  // Actual and final
  actualStart: date("actual_start"),
  actualMainInstallComplete: date("actual_main_install_complete"),
  actualGasOnComplete: date("actual_gas_on_complete"),
  actualServicesStart: date("actual_services_start"),
  actualAllServicesComplete: date("actual_all_services_complete"),
  actualRetirementComplete: date("actual_retirement_complete"),
  actualPackageSubmittedDate: date("actual_package_submitted_date"),
  actualRetorationTicketSubmittedDate: date(
    "actual_restoration_ticket_submitted_date"
  ),
  finalInvoiceDateSubmitted: date("final_invoice_date_submitted"),
  weekEnding: date("week_ending"),
  scopeYear: integer("scope_year"),
  cocRegion: date("coc_region"),
  // builingCoc: varchar("builing_coc", {length: 10}),
  buldingCoc: varchar("builing_coc", { length: 10 }),
  polSub: integer("pol_sub"),

  permitRemarks: text(snakeCase("permitRemarks")),
  statePermitStatus: varchar(snakeCase("statePermitStatus")),
  statePermitExpiration: varchar(snakeCase("statePermitExpiration")),
  localPermitStatus: varchar(snakeCase("localPermitStatus")),
  localPermitExpiration: varchar(snakeCase("localPermitExpiration")),
  mrInfo: varchar(snakeCase("mrInfo")),
  mrNeedDate: varchar(snakeCase("mrNeedDate")),
  soilTestDate: varchar(snakeCase("soilTestDate")),
  soiltTestStatus: varchar(snakeCase("soiltTestStatus")),
  procedureStatus: varchar(snakeCase("procedureStatus")),
  gasOnProcedureRequired: varchar(snakeCase("gasOnProcedureRequired")),
  retirementProcedureRequired: varchar(
    snakeCase("retirementProcedureRequired")
  ),
  commentsFromPv: varchar(snakeCase("commentsFromPv")),
  carryOverFromPriorYear: varchar(snakeCase("carryOverFromPriorYear")),
  pullForward: varchar(snakeCase("pullForward")),
  waf: varchar(snakeCase("waf")),
  soiltTest: varchar(snakeCase("soiltTest")),
});

export const insertScheduledSchema = createInsertSchema(scheduled)
  .omit({
    id: true,
  })
  .extend({
    woNbr: z.number(),
    woDescription: z.string().optional(),
    woProgram: z.string().optional(),
    woRetirementGroup: z.string().optional(),

    scheduledStart: z.coerce.date(),
    scheduledMainInstallComplete: z.coerce.date().optional(),
    scheduledGasOnComplete: z.coerce.date().optional(),
    scheduledAllServicesComplete: z.coerce.date().optional(),
    scheduledRetirementComplete: z.coerce.date().optional(),

    actualMainInstallFeet: z.coerce.number().optional(),
    targetMainInstallFeet: z.coerce.number().optional(),
    pctMainInstalled: z.coerce.number().optional(),

    actualStart: z.coerce.date().optional(),
    actualMainInstallComplete: z.coerce.date().optional(),
    actualGasOnComplete: z.coerce.date().optional(),
    actualServicesStart: z.coerce.date().optional(),
    actualAllServicesComplete: z.coerce.date().optional(),
    actualRetirementComplete: z.coerce.date().optional(),
    actualPackageSubmittedDate: z.coerce.date().optional(),
    actualRetorationTicketSubmittedDate: z.coerce.date().optional(),
    finalInvoiceDateSubmitted: z.coerce.date().optional(),
    weekEnding: z.coerce.date().optional(),
  });
