import { Router } from "express";
import { BusinessController } from "../controllers";
import { validationJwt, validationSchema } from "../middlewares";
import { BusinessSchemas } from "../schemas";
const businessRouter = Router();

businessRouter.post(
  "/",
  validationJwt,
  validationSchema(BusinessSchemas.businessSchema),
  BusinessController.createBusiness
);

export default businessRouter;
