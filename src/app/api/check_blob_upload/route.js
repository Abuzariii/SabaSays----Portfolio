import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req) {
  const file = req.body || "";
  const contentType = req.headers.get("content-type") || "text/plain";
  const timestamp = Date.now();
  const filename = `${timestamp}.${contentType.split("/")[1]}`;
  console.log(filename);

  const token = process.env.VERCEL_BLOB_READ_WRITE_TOKEN;

  const blob = await put(filename, file, {
    contentType,
    access: "public",
    token,
  });
  return NextResponse.json({ blob });
}
