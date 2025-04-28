
export type PageStatus = "draft" | "published" | "archived";

export interface Page {
  page(page: unknown): unknown;
  id: number;
  slug: string;
  title_en: string;
  title_pl: string;
  description_en?: string;
  description_pl?: string;
  content_en: string;
  content_pl?: string;
  metaDescription?: string;
  metaKeywords?: string;
  metaTitle?: string;
  metaImage?: string;
  metaImageAlt?: string;
  rawContent_en?: string;
  rawContent_pl?: string;
  status: PageStatus;
  createdAt: string;
  updatedAt: string;
  pageElements: PageElement[];
}

export interface PageElement {
  id: number;
  title_en: string;
  title_pl: string;
  description_en?: string;
  description_pl?: string;
  image?: string;
  imageAlt?: string;
  pageId: number;
  type: string;
  content: string;
  order: number;
  rawContent_en?: string;
  rawContent_pl?: string;
  createdAt: string;
  updatedAt: string;
}