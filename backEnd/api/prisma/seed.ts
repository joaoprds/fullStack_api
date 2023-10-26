import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const product1 = await prisma.product.create({
    data: {
      name: "iPhone",
      description: "Iphone 15 Pro Max",
      color: "Natural Titanium",
      productCategory: "Smartphones",
      price: 10.999,
      promotionalPrice: 10.718,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: "Wardrobe",
      description: "14 doors, 6 drawers",
      color: "Varnish",
      productCategory: "Furniture",
      price: 799.89,
      promotionalPrice: 775.89,
    },
  });

  const product3 = await prisma.product.create({
    data: {
      name: "Home theater",
      description: "Bluetooth wireless soundbar",
      color: "Silver",
      productCategory: "Electronics",
      price: 1.299,
      promotionalPrice: 1.243,
    },
  });

  const product4 = await prisma.product.create({
    data: {
      name: "Toaster",
      description: "Space for 66 slices of bread",
      color: "Black",
      productCategory: "Appliances",
      price: 149.9,
      promotionalPrice: 142.4,
    },
  });

  const product5 = await prisma.product.create({
    data: {
      name: "Refrigerator",
      description: "2 doors with freezer",
      color: "White",
      productCategory: "Refrigerators",
      price: 94.789,
      promotionalPrice: 4.43,
    },
  });
};

main();
