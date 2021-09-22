import { Router } from "express";
import { UserController } from "../controllers";
import { validationJwt } from "../middlewares";
const userRouter = Router();

userRouter.get("/", validationJwt, UserController.getAllUsers);

// router.post("/role", );

export default userRouter;
