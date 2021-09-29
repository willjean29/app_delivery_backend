import { Schema, model, Document } from "mongoose";
import LocationSchema, { ILocation } from "./location.model";

export interface IBusiness extends Document {
  name: string;
  categorie: string;
  description: string;
  location: ILocation;
  background: string;
  img: string;
  rating: number;
}

const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  categorie: {
    type: Schema.Types.ObjectId,
    ref: "Categorie",
    required: [true, "La categoria es obligatoria"],
  },
  description: {
    type: String,
    trim: true,
  },
  location: {
    type: LocationSchema,
    required: [true, "La ubicación es obligatoria"],
  },
  direcction: {
    type: String,
    trim: true,
    required: [true, "La dirección es obligatoria"],
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
    required: [true, "El teléfono es obligatoria"],
  },
  rating: {
    type: Number,
    default: 0,
  },
});

export default model("Business", BusinessSchema);
