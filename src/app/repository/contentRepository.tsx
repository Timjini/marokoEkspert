import { prisma } from '../lib/prisma';

export const contentRepository = {
  findById: async (id: string) => {
    return prisma.page.findUnique({ where: { id: Number(id) } });
  },
  findAll: async () => {
    return prisma.page.findMany();
  },
};
