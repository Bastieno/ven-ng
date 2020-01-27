import Product from '../models/products';

export const getProducts = (req, res) => {
  const { category } = req.query || {};

  const findQuery = Product.find({});
  findQuery
    .populate('category')
    .sort({ createdAt: -1 })
    .exec((errors, products) => {
      if (errors) {
        return res.status(422).send({ errors });
      }

      // WARNING: requires improvement, can decrease performance
      if (category) {
        const filteredProducts = products.filter((product) => product.category.name === category);

        return res.json({ data: filteredProducts, message: 'Products successfully retrieved' });
      }

      return res.json({ data: products, message: 'Products successfully retrieved' });
    });
};

export const getProductById = (req, res) => {
  const { productId } = req.params;

  Product.findById(productId)
    .populate('category')
    .exec((error, product) => {
      if (error) return res.status(422).send({ error });

      if (!product) return res.json({ data: product, message: `Product with the id: ${productId} does not exist` });

      return res.json({ data: product, message: 'Product successfully retrieved' });
    });
};

export const createProduct = (req, res) => {
  const productData = req.body;

  const product = new Product(productData);

  product.save((error, createdProduct) => {
    if (error) return res.status(422).send({ error });

    return res.json({ data: createdProduct, message: 'Product successfully created' });
  });
};

export const updateProduct = (req, res) => {
  const productData = req.body;
  const { productId } = req.params;

  productData.updatedAt = new Date();

  Product.findByIdAndUpdate(productId, { $set: productData }, { new: true })
    .populate('category')
    .exec((error, updatedProduct) => {
      if (error) return res.status(422).json({ error });

      if (!updatedProduct) return res.json({ data: updatedProduct, message: `Product with the id: ${productId} does not exist` });

      return res.json({ data: updatedProduct, message: 'Update successful' });
    });
};
