import { isValidObjectId } from "mongoose";
import Categorie, { ICategorie } from "../models/categorie.model";
import { DbValidators } from "../helpers";
import { ICategorieDto, ICategorieUpdateDto } from "../dtos/categorie.dtos";
const createCategorie = async (categorie: ICategorieDto) => {
  const existCategorie = await DbValidators.existCategorie(categorie.name);
  if (existCategorie) return undefined;
  try {
    const newCategorie = new Categorie(categorie);
    await newCategorie.save();
    return newCategorie;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllCategories = async () => {
  try {
    const categories = (await Categorie.find()) as ICategorie[];
    return categories;
  } catch (error) {
    return null;
  }
};

const deleteCategorie = async (id: string) => {
  if (!isValidObjectId(id) || id === undefined) return undefined;
  try {
    const categorie = (await Categorie.findByIdAndDelete(id)) as ICategorie;
    return categorie;
  } catch (error) {
    return null;
  }
};

const updateCategorie = async (id: string, data: ICategorieUpdateDto) => {
  if (!isValidObjectId(id) || id === undefined) return undefined;
  try {
    const categorie = (await Categorie.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })) as ICategorie;
    return categorie;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export default {
  createCategorie,
  getAllCategories,
  deleteCategorie,
  updateCategorie,
};
