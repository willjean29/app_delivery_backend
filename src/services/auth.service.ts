import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user.model";
import Role, { IRole } from "../models/role.model";
import Token, { IToken } from "../models/token.model";
import { DbValidators, JwtGenerator } from "../helpers";
import { SignUpDto, SignInDto } from "../dtos/auth.dtos";
import { JwtPayload } from "../middlewares/validateJwt";
const signUp = async (signUpDTO: SignUpDto) => {
  try {
    const existEmail = await DbValidators.existEmail(signUpDTO.email);
    if (existEmail) return undefined;
    const newUser: IUser = new User(signUpDTO);
    // create jwt and jwtRefresh
    let jwt: string;
    let jwtRefresh: string;
    try {
      jwt = (await JwtGenerator.generateJwt(
        newUser._id,
        process.env.SECRET_JWT!,
        process.env.EXPIRES_JWT!
      )) as string;
      jwtRefresh = (await JwtGenerator.generateJwt(
        newUser._id,
        process.env.SECRET_JWT_REFRESH!,
        process.env.EXPIRES_JWT_REFRESH!
      )) as string;
      const token = new Token({ refreshToken: jwtRefresh });
      token.save();
    } catch (error) {
      return null;
    }

    newUser.save();
    return { newUser, jwt, jwtRefresh };
  } catch (error) {
    return null;
  }
};

const signIn = async (signIn: SignInDto) => {
  try {
    const existEmail = await DbValidators.existEmail(signIn.email);
    if (!existEmail) return undefined;

    let user = (await User.findOne({ email: signIn.email })) as IUser;
    if (!user.comparePassword(signIn.password)) return undefined;

    // create jwt and jwtRefresh
    let jwt: string;
    let jwtRefresh: string;
    try {
      jwt = (await JwtGenerator.generateJwt(
        user._id,
        process.env.SECRET_JWT!,
        process.env.EXPIRES_JWT!
      )) as string;
      jwtRefresh = (await JwtGenerator.generateJwt(
        user._id,
        process.env.SECRET_JWT_REFRESH!,
        process.env.EXPIRES_JWT_REFRESH!
      )) as string;
      const token = new Token({ refreshToken: jwtRefresh });
      token.save();
    } catch (error) {
      return null;
    }

    return { user, jwt, jwtRefresh };
  } catch (error) {
    return null;
  }
};

const refreshToken = async (jwtRefresh: string) => {
  if (!refreshToken) return undefined;
  let accessToken: string = "";
  let updateToken: string = "";
  try {
    // validate refresh token
    const token = (await Token.findOne({ refreshToken: jwtRefresh })) as IToken;
    if (!token) return undefined;
    // get payload token
    const { payload } = jwt.verify(
      token.refreshToken as string,
      process.env.SECRET_JWT_REFRESH!
    ) as JwtPayload;
    // get userById from payload
    const user = (await User.findById(payload)) as IUser;
    // create new access and refresh token
    accessToken = (await JwtGenerator.generateJwt(
      payload,
      process.env.SECRET_JWT!,
      process.env.EXPIRES_JWT!
    )) as string;
    updateToken = (await JwtGenerator.generateJwt(
      payload,
      process.env.SECRET_JWT_REFRESH!,
      process.env.EXPIRES_JWT_REFRESH!
    )) as string;
    token.refreshToken = updateToken;
    token.save();
    return {
      user,
      accessToken,
      updateToken,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default {
  signUp,
  signIn,
  refreshToken,
};
