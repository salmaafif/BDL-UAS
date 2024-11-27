import OrderItem from '../models/OrderItem.js';

export const getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.getAll();
    res.json(orderItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOrderItemById = async (req, res) => {
  try {
    const orderItem = await OrderItem.getById(req.params.id);
    if (orderItem) {
      res.json(orderItem);
    } else {
      res.status(404).json({ message: 'Order item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createOrderItem = async (req, res) => {
  try {
    const result = await OrderItem.create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateOrderItem = async (req, res) => {
  try {
    const result = await OrderItem.update(req.params.id, req.body);
    if (result.affectedRows > 0) {
      res.json({ message: 'Order item updated successfully' });
    } else {
      res.status(404).json({ message: 'Order item not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteOrderItem = async (req, res) => {
  try {
    const result = await OrderItem.delete(req.params.id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Order item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Order item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

