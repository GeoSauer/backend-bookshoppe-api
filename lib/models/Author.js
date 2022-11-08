const pool = require('../utils/pool.js');

class Author {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static async getAllAuthors() {
    const { rows } = await pool.query('SELECT * FROM authors');
    return rows.map((authorRow) => new Author(authorRow));
  }
}

module.exports = { Author };
