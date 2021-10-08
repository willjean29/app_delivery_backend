import { Request, Response } from "express";
import { ProductService } from "../services";
const createProduct = async (req: Request, res: Response) => {
  const product = await ProductService.createProduct(req.body);
  if (!product) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Erro al crear producto",
    });
  }

  return res.json({
    success: true,
    product,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const products = await ProductService.getAllProducts(id as string);
  if (products === undefined) {
    return res.status(400).json({
      success: false,
      msg: "Ingrese un id valido como parámetro",
    });
  }
  if (!products) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al obtener productos",
    });
  }
  return res.json({
    success: true,
    products,
  });
};

export default {
  createProduct,
  getAllProducts,
};
