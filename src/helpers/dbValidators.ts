import User, { IUser } from "../models/user.model";
import Role, { IRole } from "../models/role.model";
import Categorie, { ICategorie } from "../models/categorie.model";
import Business, { IBusiness } from "../models/business.model";
import { BusinessDto } from "../dtos/business.dtos";
import { ErroCreateBusinessMessage } from "utils/types";

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

const existBusiness = async (
  businessDto: BusinessDto
): Promise<ErroCreateBusinessMessage> => {
  let msg: ErroCreateBusinessMessage = "not exists";
  const rgxName = new RegExp(`^${businessDto.name}$`, "i");
  const rgxAddress = new RegExp(`^${businessDto.address}$`, "i");
  const business = (await Business.findOne({
    $or: [
      { name: rgxName },
      { location: businessDto.location },
      { user: businessDto.user },
      { address: rgxAddress },
    ],
  })) as IBusiness;

  if (business) {
    const location = business.location.toJSON();
    delete location._id;

    if (business.name.toLowerCase() === businessDto.name.toLocaleLowerCase())
      msg = "El nombre del negocio ya esta registrado";

    if (
      business.address.toLowerCase() === businessDto.address.toLocaleLowerCase()
    )
      msg = "La direccion ya se encuentra registrada";

    if (JSON.stringify(location) === JSON.stringify(businessDto.location))
      msg = "La ubicación ya se encuentra registrada";

    if (business.user.toString() === businessDto.user)
      msg = "El usuario ya se encuentra asociado a un negocio";
  } else {
    msg = "not exists";
  }

  return msg;
};

export default {
  existEmail,
  existUserById,
  existRole,
  existCategorie,
  existBusiness,
};
