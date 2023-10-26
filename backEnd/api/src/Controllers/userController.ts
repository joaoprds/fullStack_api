import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export const all = async (req: Request, res: Response) => {
  const products = await ProductService.findAll();
  res.json({ products });
};

export const one = async (req: Request, res: Response) => {
  const { id } = req.params;
  const products = await ProductService.findOne(id);
  if (products) {
    res.json({ products });
  } else {
    res.json({ error: "product not found" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { id } = req.body;
  const products = await ProductService.findOne(id);
  if (products) {
    res.json({ products });
  } else {
    res.json({ error: "Product not found" });
  }
};

export const create = async (req: Request, res: Response) => {
  const { name, description, color, productCategory, price, promotionalPrice } =
    req.body;

  if (
    name &&
    description &&
    color &&
    productCategory &&
    price &&
    promotionalPrice
  ) {
    const user = await ProductService.create({
      name,
      description,
      color,
      productCategory,
      price,
      promotionalPrice,
    });
    res.status(200).json({ user });
  } else {
    res.json({ error: "Data missing" });
  }
};

export const editUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, color, productCategory, price } = req.body;

  const products = await ProductService.findOne(id);
  if (products) {
    const productsUpdated = await ProductService.update(products.id, {
      name,
      description,
      color,
      productCategory,
      price,
    });
    res.json({ user: productsUpdated });
  } else {
    res.json({ error: "User not found" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const products = await ProductService.findOne(id);
  if (products) {
    await ProductService.delete(id);
    res.json({ status: "Product Deleted" });
  } else {
    res.json({ error: "Product not found" });
  }
};
