-- CreateEnum
CREATE TYPE "PageStatus" AS ENUM ('draft', 'published', 'archived');

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "title_pl" TEXT NOT NULL,
    "description_en" TEXT,
    "description_pl" TEXT,
    "content_en" TEXT NOT NULL,
    "content_pl" TEXT,
    "metaDescription" TEXT,
    "metaKeywords" TEXT,
    "metaTitle" TEXT,
    "metaImage" TEXT,
    "metaImageAlt" TEXT,
    "rawContent_en" TEXT,
    "rawContent_pl" TEXT,
    "status" "PageStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageElement" (
    "id" SERIAL NOT NULL,
    "title_en" TEXT NOT NULL,
    "title_pl" TEXT NOT NULL,
    "description_en" TEXT,
    "description_pl" TEXT,
    "image" TEXT,
    "imageAlt" TEXT,
    "pageId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "rawContent_en" TEXT,
    "rawContent_pl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageElement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_key" ON "Page"("slug");

-- AddForeignKey
ALTER TABLE "PageElement" ADD CONSTRAINT "PageElement_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
