import { Router } from 'express';
import {
  getProducts, getProductById, createProduct, updateProduct
} from '../controllers/products';
import productValidator from '../middlewares/productValidator';

const router = Router();

router.get('', getProducts);
router.get('/:productId', getProductById);
router.post('', productValidator, createProduct);
router.patch('/:productId', productValidator, updateProduct);

export default router;
