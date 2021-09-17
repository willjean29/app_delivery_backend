import mongoose, { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";
export interface IUser extends Document {
  email: string;
  password: string;
  phone: string;
  image: string;
  name: string;
  lastName: string;
  comparePassword(password: string): boolean;
}

const UserSchema = new Schema({
  email: {
    type: "string",
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: "string",
    required: true,
  },
  phone: {
    type: "string",
    required: true,
  },
  image: {
    type: "string",
  },
  name: {
    type: "string",
    required: true,
    trim: true,
  },
  lastName: {
    type: "string",
    required: true,
    trim: true,
  },
});

UserSchema.pre("save", function (next: any) {
  const user = this as IUser;
  if (!user.isModified("password")) return next();

  // hashear password
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);
  return next();
});

UserSchema.methods.comparePassword = function (password: string) {
  const user = this as IUser;
  const isEquals = bcrypt.compareSync(password, user.password);
  return isEquals;
};

UserSchema.methods.toJSON = function () {
  const { __v, password, ...data } = this.toObject();
  return data;
};

export default model<IUser>("User", UserSchema);
