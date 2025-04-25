ALTER TABLE "scheduled" ADD COLUMN "updated_services" integer;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "permit_remarks" text;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "state_permit_status" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "state_permit_expiration" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "local_permit_status" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "local_permit_expiration" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "mr_info" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "mr_need_date" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "soil_test_date" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "soilt_test_status" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "procedure_status" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "gas_on_procedure_required" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "retirement_procedure_required" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "comments_from_pv" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "carry_over_from_prior_year" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "pull_forward" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "waf" varchar;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "soilt_test" varchar;