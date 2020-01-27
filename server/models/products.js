import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false, default: 'N/A' },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  imageUrl: { type: String, required: true },
  color: { type: String, required: false, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
