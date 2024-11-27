import express from 'express';
import { getAllDiscounts, getDiscountById, createDiscount, updateDiscount, deleteDiscount } from '../controllers/DiscountController.js';

const router = express.Router();

router.get('/', getAllDiscounts);
router.get('/:id', getDiscountById);
router.post('/', createDiscount);
router.put('/:id', updateDiscount);
router.delete('/:id', deleteDiscount);

export default router;

