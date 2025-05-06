ALTER TABLE "scheduled_changes" ADD COLUMN "version" integer;--> statement-breakpoint
ALTER TABLE "scheduled_changes" DROP COLUMN "operation";--> statement-breakpoint
ALTER TABLE "scheduled_changes" DROP COLUMN "changed_fields";