import { Router } from "express";
import { RoleSchemas } from "../schemas";
import { RoleController } from "../controllers";
import { validationRole, validationSchema } from "../middlewares";
const roleRouter = Router();

roleRouter.post(
  "/",
  validationSchema(RoleSchemas.roleSchema),
  validationRole,
  RoleController.createRole
);

// router.post("/role", );

export default roleRouter;
