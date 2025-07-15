import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "Missing URL parameter." }, { status: 400 });
  }
  try {
    const res = await fetch(url, { method: "GET" });
    const text = await res.text();
    return new NextResponse(text, {
      status: res.status,
      headers: { "content-type": res.headers.get("content-type") || "text/plain" },
    });
  } catch {
    return NextResponse.json({ error: "Unable to retrieve document." }, { status: 500 });
  }
} 