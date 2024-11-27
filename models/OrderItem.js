import db from '../config/database.js';

class OrderItem {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM order_items', (err, results) => {
        if (err) reject(err);
        else resolve(results);
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

  static create(orderItem) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO order_items (quantity, price, product_id) VALUES (?, ?, ?)';
      db.query(query, [orderItem.quantity, orderItem.price, orderItem.product_id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static update(id, orderItem) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE order_items SET quantity = ?, price = ?, product_id = ? WHERE order_item_id = ?';
      db.query(query, [orderItem.quantity, orderItem.price, orderItem.product_id, id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM order_items WHERE order_item_id = ?', [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}

export default OrderItem;

