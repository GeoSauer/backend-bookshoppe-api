const pool = require('../utils/pool');

class Author {
  constructor({ id, name, dob, pob, books }) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.pob = pob;
    this.books = books;
  }

  static async getAllAuthors() {
    const { rows } = await pool.query(
      'SELECT authors.id, authors.name FROM authors'
    );
    return rows.map((authorRows) => new Author(authorRows));
  }
  static async getAuthorById(id) {
    const { rows } = await pool.query(
      `SELECT authors.*,
      COALESCE(json_agg(to_jsonb(books))
      FILTER (WHERE books.id IS NOT NULL), '[]') 
      AS books
      FROM authors
      LEFT JOIN author_books
      ON authors.id = author_books.author_id
      LEFT JOIN books
      ON author_books.book_id = books.id
      WHERE authors.id = $1
      GROUP BY authors.id
    ;`,
      [id]
    );
    return new Author(rows[0]);
  }
}

module.exports = Author;
