import { Request, Response } from "express";
import { RoleService } from "../services";
const createRole = async (req: Request, res: Response) => {
  const newRole = await RoleService.createRole(req.body);
  if (newRole === undefined) {
    return res.status(400).json({
      success: false,
      mag: "El rol ya se encuentra registrado",
    });
  }
  if (!newRole) {
    return res.status(500).json({
      success: false,
      mag: "Error al crear rol",
    });
  }
  return res.json({
    success: true,
    role: newRole,
  });
};

export default {
  createRole,
};
