import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const apiUrl = process.env.STONEFORT_EMAIL_API_URL;
    const apiKey = process.env.STONEFORT_EMAIL_API_KEY;

    if (!apiUrl || !apiKey) {
      return NextResponse.json(
        { error: "Server env variables missing" },
        { status: 500 }
      );
    }

    //  Identify site safely
    const site = body.site || "unknown-site";

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
      body: JSON.stringify({
        ...body,
        site, // forward site identifier
      }),
    });

    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json(
        { error: text },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}