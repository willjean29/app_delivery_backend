import { isValidObjectId } from "mongoose";
import { ICategorieProductDto } from "../dtos/subcategorie.dtos";
import Subcategorie, { ISubcategorie } from "../models/subcategorie.model";

const createSubcategorie = async (
  categorieProductDto: ICategorieProductDto
) => {
  try {
    const categorieProduct = new Subcategorie(
      categorieProductDto
    ) as ISubcategorie;
    categorieProduct.save();
    return categorieProduct;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const getAllSubcategories = async (id: string) => {
  if (!isValidObjectId(id) || id === undefined) return undefined;
  try {
    const categoriesProducts = (await Subcategorie.find({
      business: id,
    })) as ISubcategorie[];
    return categoriesProducts;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export default {
  createSubcategorie,
  getAllSubcategories,
};
