import { Schema, model, Document } from "mongoose";

export interface ISubcategorie extends Document {
  name: string;
  description: string;
  business: string;
}
const SubcategorieSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
});

export default model("Subcategorie", SubcategorieSchema);
