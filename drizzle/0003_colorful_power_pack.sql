ALTER TABLE "scheduled" RENAME COLUMN "targetFtRetiredOutmoded" TO "actual_ft_retired_per_as_built_outmoded";--> statement-breakpoint
ALTER TABLE "scheduled" RENAME COLUMN "actualFtRetiredPerAsBuiltOutmoded" TO "target_ft_retired_outmoded";--> statement-breakpoint
ALTER TABLE "scheduled" RENAME COLUMN "pctRetiredOutmodedComplete" TO "pct_retired_outmoded_complete";--> statement-breakpoint
ALTER TABLE "scheduled" RENAME COLUMN "actualFtRetiredPerAsBuiltNonOutmoded" TO "actual_ft_retired_per_as_built_non_outmoded";--> statement-breakpoint
ALTER TABLE "scheduled" RENAME COLUMN "targetFtRetiredNonOutmoded" TO "target_ft_retired_non_outmoded";--> statement-breakpoint
ALTER TABLE "scheduled" RENAME COLUMN "pctRetiredNonOutmodedComplete" TO "pct_retired_non_outmoded_complete";