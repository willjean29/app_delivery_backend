import { Router } from "express";
import { SubcategorieController } from "../controllers";
const categorieProductRouter = Router();

categorieProductRouter.post("/", SubcategorieController.createSubcategorie);

categorieProductRouter.get("/:id", SubcategorieController.getAllSubcategories);

export default categorieProductRouter;
