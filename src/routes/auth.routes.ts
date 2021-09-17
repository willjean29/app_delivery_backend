import { Router } from "express";
import { AuthController } from "../controllers";
import { AuthSchemas } from "../schemas";
import { validationSchema } from "../middlewares";
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
export default router;
