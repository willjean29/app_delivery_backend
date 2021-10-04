import { Router } from "express";
import { AuthController } from "../controllers";
import { AuthSchemas } from "../schemas";
import { validationSchema, validationJwt } from "../middlewares";
const authRouter = Router();

authRouter.post("/", validationJwt, AuthController.getCurrentUser);

authRouter.post(
  "/signup",
  validationSchema(AuthSchemas.signUpSchema),
  AuthController.signUp
);

authRouter.post(
  "/signin",
  validationSchema(AuthSchemas.signInSchema),
  AuthController.signIn
);

authRouter.post("/signout", AuthController.signOut);

authRouter.post("/refresh-token", AuthController.refreshToken);
export default authRouter;
