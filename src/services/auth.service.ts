import User, { IUser } from "../models/user.model";
import { DbValidators, JwtGenerator } from "../helpers";
import { SignUpDTO, SignInDTO } from "../dtos/auth.dtos";

const signUp = async (signUpDTO: SignUpDTO) => {
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
    } catch (error) {
      return null;
    }
    newUser.save();
    return { newUser, jwt, jwtRefresh };
  } catch (error) {
    return null;
  }
};

const signIn = async (signIn: SignInDTO) => {
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
    } catch (error) {
      return null;
    }

    return { user, jwt, jwtRefresh };
  } catch (error) {
    return null;
  }
};

export default {
  signUp,
  signIn,
};
