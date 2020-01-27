import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Product from './models/products';
import Category from './models/categories';
import { categories, SHOP_DATA } from './data';

dotenv.config();

const { DB_URI } = process.env;

const products = SHOP_DATA.reduce((acc, value) => [...acc, ...value.items], []);

class DB {
  constructor() {
    this.products = products;
    this.categories = categories;
    this.models = [Product, Category];
  }

  async cleanDb() {
    this.models.forEach(async (model) => {
      await model.deleteMany({}, () => {});
      console.log(`Data for model ${model.collection.collectionName} deleted!`);
    });
  }

  async pushDataToDb() {
    this.categories.forEach(async (category) => {
      await (new Category(category)).save(() => { });
    });

    this.products.forEach(async (product) => {
      await (new Product(product)).save(() => { });
    });

    console.log('Database Populated!');
  }

  async seedDb() {
    await this.cleanDb();
    await this.pushDataToDb();
  }
}

mongoose.connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  .then(async () => {
    const db = new DB();
    await db.seedDb();
    console.log('You can close connection now!');
  })
  .catch((err) => console.log(err));
