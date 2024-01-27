import { NextResponse } from "next/server";

const CLIENT_ID = process.env.CLIENT_ID;

export async function GET(req) {
  const id = CLIENT_ID;
  //   const id = 1;
  try {
    console.log(id);
    return NextResponse.json({ message: id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
