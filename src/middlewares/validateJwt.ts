import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import moment from "moment";
import User, { IUser } from "../models/user.model";

export interface JwtPayload {
  payload: string;
  iat: number;
  exp: number;
}
const validationJwt = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.headers.token;

  if (!accessToken) {
    return res.status(400).json({
      success: false,
      msg: "Access-Token requerido",
    });
  }

  try {
    const payload = jwt.verify(
      accessToken as string,
      process.env.SECRET_JWT!
    ) as JwtPayload;
    // exist user
    const user = (await User.findById(payload.payload)) as IUser;
    if (!user)
      return res.status(400).json({
        success: false,
        msg: "Access-Token invalido - usuario no registrado",
      });
    // validate status
    // @ts-ignore
    req.user = user;
    return next();
  } catch (error: any) {
    const name = error.name;
    // for a invalid access token or expired token
    return res.status(400).json({
      success: false,
      msg: "Access-Token invalido",
      details: error,
    });
  }
};

export default validationJwt;
