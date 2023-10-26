import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type createDataProductProp = {
  name: string;
  description: string;
  color: string;
  productCategory: string;
  price: number;
  promotionalPrice: number;
};

type updateDataProductProp = {
  name?: string;
  description?: string;
  color?: string;
  productCategory?: string;
  price?: number;
  promotionalPrice?: number;
};

export const ProductService = {
  findAll: async () => {
    return await prisma.product.findMany({});
  },

  findOne: async (id: string) => {
    return await prisma.product.findUnique({ where: { id } });
  },

  create: async (data: createDataProductProp) => {
    return await prisma.product.create({ data });
  },

  login: async (id: string) => {
    return await prisma.product.findUnique({ where: { id } });
  },

  update: async (id: string, data: updateDataProductProp) => {
    return await prisma.product.update({ where: { id }, data });
  },

  delete: async (id: string) => {
    return await prisma.product.delete({ where: { id } });
  },
};
