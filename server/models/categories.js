import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
  imageUrl: String
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
