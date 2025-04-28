/*
  Warnings:

  - You are about to drop the `Page` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PageElement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PageElement" DROP CONSTRAINT "PageElement_pageId_fkey";

-- DropTable
DROP TABLE "Page";

-- DropTable
DROP TABLE "PageElement";

-- CreateTable
CREATE TABLE "pages" (
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

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "page_elements" (
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

    CONSTRAINT "page_elements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pages_slug_key" ON "pages"("slug");

-- AddForeignKey
ALTER TABLE "page_elements" ADD CONSTRAINT "page_elements_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "pages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
