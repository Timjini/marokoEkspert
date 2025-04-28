import { prisma } from '../lib/prisma';

export const contentRepository = {
  findById: async (id: number) => {
    return prisma.page.findUnique({ where: { id } });
  },
  findBySlug: async (slug: string) => {
    return prisma.page.findUnique({ where: { slug }, include: { pageElements: true } });
  },
  findAll: async () => {
    return prisma.page.findMany();
  },
};
