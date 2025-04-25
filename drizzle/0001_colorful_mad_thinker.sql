ALTER TABLE "scheduled" ADD COLUMN "scheduled_main_install_complete" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "scheduled_gas_on_complete" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "scheduled_all_services_complete" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "scheduled_retirement_complente" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "target_main_install_feet" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "pct_main_installed" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actual_nbr_services_complete" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "target_services" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "pct_services_complete" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actual_start" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actual_main_install_complete" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actual_gas_on_complete" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actual_services_start" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actual_all_services_complete" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actual_retirement_complete" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actual_package_submitted_date" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actual_restoration_ticket_submitted_date" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "final_invoice_date_submitted" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "week_ending" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "scope_year" integer;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "coc_region" date;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "builing_coc" varchar(10);--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "pol_sub" integer;