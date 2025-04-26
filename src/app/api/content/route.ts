import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang") || "en";
  console.log("lang", lang);
  return NextResponse.json({'content': `This is the content in ${lang} language`});
}