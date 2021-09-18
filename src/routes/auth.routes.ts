import { Router } from "express";
import { AuthController } from "../controllers";
import { AuthSchemas } from "../schemas";
import { validationSchema, validationJwt } from "../middlewares";
const router = Router();

router.post(
  "/signup",
  validationSchema(AuthSchemas.signUpSchema),
  AuthController.signUp
);

router.post(
  "/signin",
  validationSchema(AuthSchemas.signInSchema),
  AuthController.signIn
);

router.post("/refresh-token", validationJwt, AuthController.refreshToken);
export default router;
