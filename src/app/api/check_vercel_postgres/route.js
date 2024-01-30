import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req) {
  try {
    const { id, name, description, image_url } = await req.json();
    await sql`INSERT INTO products (id, name, description, image_url) VALUES (${id}, ${name}, ${description}, ${image_url});`;
    return NextResponse.json({ message: "Data Created successfully" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const results = await sql`SELECT * FROM products ORDER BY id ASC;`;
    const rows = results.rows;

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
