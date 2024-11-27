import db from '../config/database.js';

class Product {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM products', (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM products WHERE product_id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      });
    });
  }

  static create(product) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO products (name, description, price, stock, category_id) VALUES (?, ?, ?, ?, ?)';
      db.query(query, [product.name, product.description, product.price, product.stock, product.category_id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static update(id, product) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ?, category_id = ? WHERE product_id = ?';
      db.query(query, [product.name, product.description, product.price, product.stock, product.category_id, id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM products WHERE product_id = ?', [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}

export default Product;

