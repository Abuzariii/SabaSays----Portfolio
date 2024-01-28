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
    pool.query("SELECT * FROM users ORDER BY id ASC", (results) => {
      let result = results.rows;
      return NextResponse.json({ result }, { status: 200 });
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
