import Category from '../models/Category.js';

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.getById(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const result = await Category.create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const result = await Category.update(req.params.id, req.body.name);
    if (result.affectedRows > 0) {
      res.json({ message: 'Category updated successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const result = await Category.delete(req.params.id);
    if (result.affectedRows > 0) {
      res.json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

