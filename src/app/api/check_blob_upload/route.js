import { NextResponse } from "next/server";
import { put, del, list } from "@vercel/blob";

const token = process.env.VERCEL_BLOB_READ_WRITE_TOKEN;

// Upload a single blob
export async function POST(req) {
  const file = req.body || "";
  const contentType = req.headers.get("content-type") || "text/plain";
  const timestamp = Date.now();
  const filename = `${timestamp}.${contentType.split("/")[1]}`;
  console.log(filename);

  const blob = await put(filename, file, {
    contentType,
    access: "public",
    token,
  });
  return NextResponse.json({ blob });
}

// Get all Blobs
export async function GET(req) {
  const { blobs } = await list({ token });
  return NextResponse.json({ blobs });
}

// Delete a blob

export async function DELETE(req) {
  const data = await req.json();
  console.log(data.url);
  await del(data.url, { token });
  return NextResponse.json({ message: "Deleted Succesfully" });
}
