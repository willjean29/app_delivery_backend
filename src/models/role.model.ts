import { Schema, model, Document } from "mongoose";
import { UserRoles } from "../utils/enums";

export interface IRole extends Document {
  name: string;
  description: string;
}
const RoleSchema = new Schema({
  name: {
    type: String,
    enum: Object.values(UserRoles),
    required: true,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
});

export default model<IRole>("Role", RoleSchema);
