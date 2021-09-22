import { RoleDto } from "../dtos/role.dtos";
import { Request, Response, NextFunction } from "express";
import { UserRoles } from "../utils/enums";

const validationRole = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body as RoleDto;
  const nameRole = name.toLowerCase();
  const roles = Object.values(UserRoles).map((role) => role.toLowerCase());
  if (!roles.includes(nameRole)) {
    return res.status(400).json({
      success: false,
      msg: `'${nameRole}' es un rol invalido, los roles aceptados son ${Object.values(
        UserRoles
      )}`,
    });
  }
  return next();
};

export default validationRole;
