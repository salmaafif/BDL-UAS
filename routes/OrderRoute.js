import express from 'express';
import * as orderController from '../controllers/OrderController.js';

const router = express.Router();

router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrderById);
router.get('/product/:productId', orderController.getOrdersByProductId);

export default router;

