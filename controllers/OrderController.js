import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    
    if (!items || items.length === 0) {
      res.status(400).json({ error: 'No items in the order' });
      return;
    }

    const result = await Order.create(items);
    res.status(201).json({ message: 'Order created successfully', orderId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Error creating order' });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Order.getById(id);
    if (!result) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching order' });
  }
};

export const getOrdersByProductId = async (req, res) => {
  try {
    const productId = req.params.productId;
    const results = await Order.getAllByProductId(productId);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

