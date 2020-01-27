import { Router } from 'express';
import categoriesRoutes from './categories';
import productsRoutes from './products';


const router = Router();

// Root handler
router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to Ven',
  });
});

router.use('/api/v1/categories', categoriesRoutes);
router.use('/api/v1/products', productsRoutes);

router.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: 'This route does not exist. Recheck parameters.',
  });
});

export default router;
