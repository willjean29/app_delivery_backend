import { ObjectId } from "mongoose";
import User, { IUser } from "../models/user.model";
import Role, { IRole } from "../models/role.model";
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

const existRole = async (rolName: string) => {
  let existRole: boolean = false;
  const role = (await Role.findOne({ name: rolName })) as IRole;
  role ? (existRole = true) : (existRole = false);
  return existRole;
};

export default {
  existEmail,
  existUserById,
  existRole,
};
