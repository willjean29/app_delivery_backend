import User, { IUser } from "../models/user.model";
import Role, { IRole } from "../models/role.model";
import Categorie, { ICategorie } from "../models/categorie.model";

const existEmail = async (email: string) => {
  let existEmail: boolean = false;
  const findEmail = (await User.findOne({ email })) as IUser;
  console.log({ findEmail });
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

const existCategorie = async (categorieName: string) => {
  let existCategorie: boolean = false;
  const categorie = (await Categorie.findOne({
    name: categorieName.toLowerCase(),
  })) as ICategorie;
  console.log({ categorie });
  categorie ? (existCategorie = true) : (existCategorie = false);
  return existCategorie;
};

export default {
  existEmail,
  existUserById,
  existRole,
  existCategorie,
};
