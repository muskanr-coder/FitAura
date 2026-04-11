import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Women", "Men", "Accessories", "Footwear"]
    },
    price: { type: Number, required: true, min: 0 },
    discountPrice: { type: Number, min: 0 },
    sizes: [{ type: String }],
    colors: [{ type: String }],
    images: [{ type: String, required: true }],
    rating: { type: Number, default: 4, min: 0, max: 5 },
    stock: { type: Number, default: 0, min: 0 },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
