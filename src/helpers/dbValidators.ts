import { ObjectId } from "mongoose";
import User, { IUser } from "../models/user.model";
const existEmail = async (email: string) => {
  let existEmail: boolean = false;

  const findEmail = await User.findOne({ email });
  findEmail ? (existEmail = true) : (existEmail = false);

  return existEmail;
};

const existUserById = async (id: string) => {
  let existUser: boolean = false;
  const user = (await User.findById(id)) as IUser;
  user ? (existUser = true) : (existUser = false);
  return existUser;
};

export default {
  existEmail,
  existUserById,
};
