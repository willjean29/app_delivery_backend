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

const getAllRoles = async (req: Request, res: Response) => {
  const roles = await RoleService.getAllRoles();
  if (!roles) {
    return res.status(500).json({
      success: false,
      msg: "Erro al obtener roles",
    });
  }
  return res.json({
    success: true,
    roles,
  });
};

export default {
  createRole,
  getAllRoles,
};
