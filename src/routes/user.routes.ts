import { Router } from "express";
import { UserController } from "../controllers";
import { validationJwt } from "../middlewares";
const router = Router();

router.get("/", validationJwt, UserController.getAllUsers);

export default router;
