CREATE TABLE "scheduled" (
	"id" text PRIMARY KEY NOT NULL,
	"wo_nbr" integer NOT NULL,
	"scheduled_start" date NOT NULL,
	"actual_main_install_feet" integer NOT NULL
);
