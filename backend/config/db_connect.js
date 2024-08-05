import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const { Pool } = pg;

export const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    allowExitOnIdle: true,
});