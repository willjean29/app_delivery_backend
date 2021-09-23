import { RoleDto } from "../dtos/role.dtos";
import Role, { IRole } from "../models/role.model";
import { DbValidators } from "../helpers";

const createRole = async (roleDto: RoleDto) => {
  const existRole = await DbValidators.existRole(roleDto.name);
  if (existRole) return undefined;
  try {
    const newRole: IRole = new Role(roleDto);
    await newRole.save();
    return newRole;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const getAllRoles = async () => {
  try {
    const roles = (await Role.find()) as IRole[];
    return roles;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default {
  createRole,
  getAllRoles,
};
