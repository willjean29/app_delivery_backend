import { Router } from "express";
import { BusinessController } from "../controllers";
const businessRouter = Router();

businessRouter.post("/", BusinessController.createBusiness);

export default businessRouter;
