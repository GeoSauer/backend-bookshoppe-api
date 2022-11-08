const pool = require('../utils/pool');

class Author {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }

  static async getAllAuthors() {
    const { rows } = await pool.query('SELECT * FROM authors');
    return rows.map((authorRows) => new Author(authorRows));
  }
}

module.exports = Author;
