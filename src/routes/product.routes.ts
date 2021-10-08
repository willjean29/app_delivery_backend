import { ProductsController } from "../controllers";
import { Router } from "express";

const productRouter = Router();

productRouter.post("/", ProductsController.createProduct);

productRouter.get("/", ProductsController.getAllProducts);

export default productRouter;
