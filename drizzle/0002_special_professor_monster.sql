ALTER TABLE "scheduled" ADD COLUMN "actualFtRetiredPerAsBuiltOutmoded" integer;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "targetFtRetiredOutmoded" integer;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "pctRetiredOutmodedComplete" integer;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "actualFtRetiredPerAsBuiltNonOutmoded" integer;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "targetFtRetiredNonOutmoded" integer;--> statement-breakpoint
ALTER TABLE "scheduled" ADD COLUMN "pctRetiredNonOutmodedComplete" integer;