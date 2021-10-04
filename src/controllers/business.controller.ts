import { Request, Response } from "express";
import { BusinessService } from "../services";

const createBusiness = async (req: Request, res: Response) => {
  const newBusiness = await BusinessService.createBusiness(req.body);

  if (typeof newBusiness === "string") {
    return res.status(400).json({
      success: false,
      msg: newBusiness,
    });
  }
  if (!newBusiness) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al crear el negocio",
    });
  }
  res.json({
    success: true,
    business: newBusiness,
  });
};

export default {
  createBusiness,
};
