import { Schema, model, Document } from "mongoose";

export interface IToken extends Document {
  refreshToken: string;
}
const TokenSchema = new Schema({
  refreshToken: {
    type: "string",
    required: true,
  },
});

export default model("Token", TokenSchema);
