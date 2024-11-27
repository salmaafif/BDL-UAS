import db from '../config/database.js';

class Discount {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM discounts', (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM discounts WHERE discount_id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      });
    });
  }

  static create(discount) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO discounts (name, discount_type, amount, start_date, end_date, applicable_to) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(query, [discount.name, discount.discount_type, discount.amount, discount.start_date, discount.end_date, discount.applicable_to], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static update(id, discount) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE discounts SET name = ?, discount_type = ?, amount = ?, start_date = ?, end_date = ?, applicable_to = ? WHERE discount_id = ?';
      db.query(query, [discount.name, discount.discount_type, discount.amount, discount.start_date, discount.end_date, discount.applicable_to, id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM discounts WHERE discount_id = ?', [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}

export default Discount;

