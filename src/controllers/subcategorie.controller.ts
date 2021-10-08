import { Request, Response } from "express";
import { SubcategorieService } from "../services";

const createSubcategorie = async (req: Request, res: Response) => {
  const subcategorie = await SubcategorieService.createSubcategorie(req.body);
  if (!subcategorie) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al crear categoria de producto",
    });
  }
  return res.json({
    success: true,
    subcategorie,
  });
};

const getAllSubcategories = async (req: Request, res: Response) => {
  const { id } = req.params;

  const subcategories = await SubcategorieService.getAllSubcategories(
    id as string
  );
  if (subcategories === undefined) {
    return res.status(400).json({
      success: false,
      msg: "Ingrese un id valido como parámetro",
    });
  }
  if (!subcategories) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al obtener categorias",
    });
  }
  return res.json({
    success: true,
    subcategories,
  });
};

export default {
  createSubcategorie,
  getAllSubcategories,
};
