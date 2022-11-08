const pool = require('../utils/pool');

class Book {
  constructor({ id, title, released }) {
    this.id = id;
    this.title = title;
    this.released = released;
  }
  static async getAllBooks() {
    const { rows } = await pool.query('SELECT * FROM books');
    return rows.map((bookRows) => new Book(bookRows));
  }
}

module.exports = Book;
