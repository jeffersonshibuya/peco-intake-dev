ALTER TABLE "scheduled_changes" ALTER COLUMN "version" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled_changes" ADD COLUMN "data" jsonb NOT NULL;