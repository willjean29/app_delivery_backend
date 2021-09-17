import User, { IUser } from "../models/user.model";
const existEmail = async (email: string) => {
  let existEmail: boolean = false;

  const findEmail = await User.findOne({ email });
  findEmail ? (existEmail = true) : (existEmail = false);

  return existEmail;
};

export default {
  existEmail,
};
