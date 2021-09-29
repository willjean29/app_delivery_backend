import { Schema, model, Document } from "mongoose";
export interface ILocation extends Document {
  latitude: number;
  longitude: number;
}
const LocationSchema = new Schema({
  latitude: {
    type: Number,
    trim: true,
    required: true,
  },
  longitude: {
    type: Number,
    trim: true,
    required: true,
  },
});

export default model<ILocation>("Location", LocationSchema);
