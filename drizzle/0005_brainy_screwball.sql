ALTER TABLE "scheduled" ALTER COLUMN "actual_main_install_feet" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ALTER COLUMN "target_main_install_feet" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ALTER COLUMN "pct_main_installed" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ALTER COLUMN "actual_nbr_services_complete" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ALTER COLUMN "target_services" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "scheduled" ALTER COLUMN "pct_services_complete" DROP NOT NULL;