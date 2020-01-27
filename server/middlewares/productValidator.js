import { body, validationResult, sanitizeBody } from 'express-validator';

const productValidator = [
  body('name')
    .exists()
    .withMessage('Product name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be at least 2 characters long'),
  sanitizeBody('name').trim().escape(),

  body('description', 'Description is required').isLength({ min: 1 }),
  sanitizeBody('message').trim().escape(),

  body('price')
    .exists()
    .withMessage('Price is required')
    .isFloat({ min: 0.00, max: 1000000.00 })
    .withMessage('Price must be a number'),
  sanitizeBody('price').trim(),

  body('imageUrl')
    .exists()
    .withMessage('Image url is required')
    .isURL()
    .withMessage('Image url must be valid'),
  sanitizeBody('imageUrl').trim(),

  body('color').optional({ nullable: true }),
  sanitizeBody('color').trim(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 400,
        errors: errors.array().map((error) => error.msg)[0],
      });
    } else {
      next();
    }
  }
];

export default productValidator;
