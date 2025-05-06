CREATE TABLE "scheduled_changes" (
	"id" text PRIMARY KEY NOT NULL,
	"scheduled_id" uuid,
	"changed_at" timestamp DEFAULT now(),
	"operation" text,
	"changed_fields" jsonb
);
