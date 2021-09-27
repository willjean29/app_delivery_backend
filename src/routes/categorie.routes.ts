import { Router } from "express";
import { CategorieController } from "../controllers";
import { CategorieSchemas } from "../schemas";
import { validationSchema, validationJwt } from "../middlewares";

const categorieRouter = Router();

categorieRouter.post(
  "/",
  // validationJwt,
  validationSchema(CategorieSchemas.categorieSchema),
  CategorieController.createCategorie
);

categorieRouter.get("/", CategorieController.getAllCategories);

categorieRouter.delete("/:id?", CategorieController.deleteCategorie);

categorieRouter.put("/:id?", CategorieController.updateCategorie);

export default categorieRouter;
