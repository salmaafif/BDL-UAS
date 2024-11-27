import db from '../config/database.js';

class Category {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM categories', (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM categories WHERE category_id = ?', [id], (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      });
    });
  }

  static create(category) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO categories (name) VALUES (?)';
      db.query(query, [category.name], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static update(id, name) {
    return new Promise((resolve, reject) => {
      db.query('UPDATE categories SET name = ? WHERE category_id = ?', [name, id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM categories WHERE category_id = ?', [id], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  }
}

export default Category;

