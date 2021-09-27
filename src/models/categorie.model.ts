import { Schema, model, Document } from "mongoose";

export interface ICategorie extends Document {
  name: string;
  description: string;
  img: string;
}

const CategorieSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  decription: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    required: true,
    trim: true,
  },
});

export default model<ICategorie>("Categorie", CategorieSchema);
