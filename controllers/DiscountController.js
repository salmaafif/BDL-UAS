import Discount from '../models/Discount.js';

export const getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.getAll();
    res.json(discounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.getById(req.params.id);
    if (discount) {
      res.json(discount);
    } else {
      res.status(404).json({ message: 'Discount not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createDiscount = async (req, res) => {
  try {
    const result = await Discount.create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateDiscount = async (req, res) => {
  try {
    const result = await Discount.update(req.params.id, req.body);
    if (result.affectedRows > 0) {
      res.json({ message: 'Discount updated successfully' });
    } else {
      res.status(404).json({ message: 'Discount not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteDiscount = async (req, res) => {
  try {
    const result = await Discount.delete(req.params.id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Discount deleted successfully' });
    } else {
      res.status(404).json({ message: 'Discount not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

