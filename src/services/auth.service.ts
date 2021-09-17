import User, { IUser } from "../models/user.model";
import { DbValidators } from "../helpers";
import { SignUpDTO, SignInDTO } from "../dtos/auth.dtos";

const signUp = async (signUpDTO: SignUpDTO) => {
  try {
    const existEmail = await DbValidators.existEmail(signUpDTO.email);
    if (existEmail) return undefined;
    const newUser: IUser = new User(signUpDTO);
    newUser.save();
    return newUser;
  } catch (error) {
    return null;
  }
};

const signIn = async (signIn: SignInDTO) => {
  try {
    const existEmail = await DbValidators.existEmail(signIn.email);
    if (!existEmail) return undefined;

    const user = (await User.findOne({ email: signIn.email })) as IUser;
    if (!user.comparePassword(signIn.password)) return undefined;

    return user;
  } catch (error) {
    return null;
  }
};

export default {
  signUp,
  signIn,
};
