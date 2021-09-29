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
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al iniciar sesion",
    });
  }
  return res.json({
    success: true,
    user: user.user,
    token: user.jwt,
    refreshToken: user.jwtRefresh,
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
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al registrar usuario",
    });
  }
  return res.json({
    success: true,
    user: newUser.newUser,
    token: newUser.jwt,
    refreshToken: newUser.jwtRefresh,
  });
};

const signOut = async (req: Request, res: Response) => {
  const { refreshtoken } = req.headers;
  const token = await AuthService.signOut(refreshtoken as string);
  if (token === undefined) {
    return res.status(400).json({
      success: false,
      msg: "Token invalido",
    });
  }
  if (!token) {
    return res.status(500).json({
      success: false,
      mag: "Error Server - Error al elimianr token",
    });
  }
  return res.json({
    success: true,
    refreshToken: token,
  });
};

const refreshToken = async (req: Request, res: Response) => {
  console.log(req.body);
  const token = await AuthService.refreshToken(req.body.refreshToken);
  if (token === undefined) {
    return res.status(400).json({
      success: false,
      mag: "Token expirado",
    });
  }
  if (!token) {
    return res.status(500).json({
      success: false,
      mag: "Error Server - Error al crear nuevo token",
    });
  }
  return res.json({
    success: true,
    user: token.user,
    token: token.accessToken,
    refreshToken: token.updateToken,
  });
};

const getCurrentUser = async (req: Request, res: Response) => {
  const { refreshtoken } = req.headers;
  // console.log({ headers: req.headers });
  // @ts-ignore
  const user = await AuthService.getCurrentUser(
    // @ts-ignore
    req.user._id,
    refreshtoken as string
  );
  if (!user) {
    return res.status(500).json({
      success: false,
      msg: "Error Server - Error al obtener usuario",
    });
  }
  return res.json({
    success: true,
    // @ts-ignore
    user: req.user,
    token: user.accessToken,
    refreshToken: user.tokenRefresh,
  });
};

export default {
  signIn,
  signUp,
  signOut,
  refreshToken,
  getCurrentUser,
};
