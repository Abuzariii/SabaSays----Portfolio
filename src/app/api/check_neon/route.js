import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function GET(req) {
  try {
    console.log(process.env.DATABASE_URL);
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
      response.status(200).json(results.rows);
      return NextResponse.json(results.rows).status(200);
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
