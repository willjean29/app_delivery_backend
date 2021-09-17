import { Request, Response } from "express";
import { AuthService } from "../services";

const signIn = async (req: Request, res: Response) => {
  const user = await AuthService.signIn(req.body);
  if (user === undefined) {
    return res.status(400).json({
      success: false,
      msg: "Correo o contraseña incorrectos",
    });
  }
  if (!user) {
    return res.status(400).json({
      success: false,
      msg: "Error al iniciar sesion",
    });
  }
  return res.json({
    success: true,
    user: user,
  });
};

const signUp = async (req: Request, res: Response) => {
  const newUser = await AuthService.signUp(req.body);
  if (newUser === undefined) {
    return res.status(400).json({
      success: false,
      msg: "El correo ya se encuentra registrado",
    });
  }
  if (!newUser) {
    return res.status(400).json({
      success: false,
      msg: "Error al registrar usuario",
    });
  }
  return res.json({
    success: true,
    user: newUser,
  });
};

export default {
  signIn,
  signUp,
};
