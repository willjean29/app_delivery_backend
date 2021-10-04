import { Schema, model, Document } from "mongoose";
import LocationSchema, { ILocation } from "./location.model";

export interface IBusiness extends Document {
  name: string;
  user: string;
  categorie: string;
  description: string;
  location: ILocation;
  address: string;
  background: string;
  img: string;
  phone: string;
  rating: number;
}

const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    uniqued: true,
  },
  categorie: {
    type: Schema.Types.ObjectId,
    ref: "Categorie",
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  location: {
    type: LocationSchema,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  background: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

export default model("Business", BusinessSchema);
