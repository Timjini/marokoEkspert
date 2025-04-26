import { contentRepository } from "@/app/repository/contentRepository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const lang = url.searchParams.get("lang") || "en";
  const page = contentRepository.findById("1");
  return NextResponse.json({'content': `This is the content in ${lang} language`, 'page': page});
}