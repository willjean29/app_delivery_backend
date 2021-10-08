import { isValidObjectId } from "mongoose";
import { ProductDto } from "../dtos/product.dtos";
import Product, { IProduct } from "../models/product.model";

const createProduct = async (productDto: ProductDto) => {
  try {
    const product = new Product(productDto) as IProduct;
    product.save();
    return product;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const getAllProducts = async (id: string) => {
  if (!isValidObjectId(id) || id === undefined) return undefined;
  try {
    const products = (await Product.find({ business: id })) as IProduct[];
    return products;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export default {
  createProduct,
  getAllProducts,
};
