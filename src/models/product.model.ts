import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  img: string;
  price: number;
  categorie: string;
  business: string;
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
    // required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categorie: {
    type: Schema.Types.ObjectId,
    ref: "CategorieProduct",
    required: true,
  },
  business: {
    type: Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
});

export default model("Product", ProductSchema);
