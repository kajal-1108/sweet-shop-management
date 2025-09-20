import mongoose, { Document, Schema } from "mongoose";

export interface ISweet extends Document {
  name: string;
  price: number;
  quantity: number;
  description?: string;
  category: string;
  imageUrl?: string;
}

const SweetSchema = new Schema<ISweet>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 0 },
    description: { type: String },
    category: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<ISweet>("Sweet", SweetSchema);
