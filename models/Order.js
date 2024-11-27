import db from '../config/database.js';

class Order {
  static create(items) {
    return new Promise((resolve, reject) => {
      const values = items.map(item => [item.quantity, item.price, item.product_id]);
      db.query('INSERT INTO order_items (quantity, price, product_id) VALUES ?', [values], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM order_items WHERE order_item_id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      });
    });
  }

  static getAllByProductId(productId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM order_items WHERE product_id = ?', [productId], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }
}

export default Order;

