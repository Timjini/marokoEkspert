import { contentRepository } from "@/app/repository/contentRepository";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { slug, lang = "en" } = await req.json();

    if (!slug) {
      return NextResponse.json({ error: "Missing slug in request body" }, { status: 400 });
    }

    const page = await contentRepository.findBySlug(slug);

    if (!page) {
      return NextResponse.json({ error: `Page not found for slug: ${slug}` }, { status: 404 });
    }

    return NextResponse.json({
      content: `This is the content in ${lang} language`,
      page,
    });
  } catch (error) {
    console.error("Error fetching page content:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
