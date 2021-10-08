import { Schema, model, Document } from "mongoose";

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
