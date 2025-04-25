import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { Pool } from "pg";

config({ path: ".env.local" });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
export const db = drizzle({ client: pool, schema, casing: "snake_case" });
// export const db = drizzle(process.env.DATABASE_URL!, { schema });
