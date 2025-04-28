import { prisma } from '../lib/prisma';

export const contentRepository = {
  findById: async (id: number) => {
    return prisma.page.findUnique({ where: { id } });
  },
  findBySlug: async (slug: string) => {
    try {
      return await prisma.page.findUnique({
        where: { slug },
        include: { pageElements: true }
      });
    } catch (error) {
      console.error("Prisma error in findBySlug:", error);
      throw error;
    }
  },
  findAll: async () => {
    return prisma.page.findMany();
  },
};
