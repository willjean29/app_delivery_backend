import { Request, Response } from "express";
import { CategorieService } from "../services";
const createCategorie = async (req: Request, res: Response) => {
  const newCategorie = await CategorieService.createCategorie(req.body);
  if (newCategorie === undefined) {
    return res.status(400).json({
      success: false,
      msg: "La categoría ya se encuentra registrada",
    });
  }

  if (!newCategorie) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al registrar categoría",
    });
  }

  return res.json({
    success: true,
    categorie: newCategorie,
  });
};

const getAllCategories = async (req: Request, res: Response) => {
  const categories = await CategorieService.getAllCategories();
  if (!categories) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al obtener las categorias",
    });
  }
  return res.json({
    success: true,
    categories,
  });
};

const deleteCategorie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const categorie = await CategorieService.deleteCategorie(id);
  if (categorie === undefined) {
    return res.status(400).json({
      success: false,
      msg: "Ingrese un Id válido",
    });
  }
  if (!categorie) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al eliminar categoría",
    });
  }

  return res.status(200).json({
    success: true,
    categorie,
  });
};

const updateCategorie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const categorie = await CategorieService.updateCategorie(id, req.body);
  if (categorie === undefined) {
    return res.status(400).json({
      success: false,
      msg: "Ingrese un Id válido",
    });
  }
  if (!categorie) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al actualizar categoría",
    });
  }

  return res.status(200).json({
    success: true,
    categorie,
  });
};
export default {
  createCategorie,
  getAllCategories,
  deleteCategorie,
  updateCategorie,
};
