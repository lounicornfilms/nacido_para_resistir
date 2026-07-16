import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { kv } = await import("@vercel/kv");
    const count = await kv.incr("visits");
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
