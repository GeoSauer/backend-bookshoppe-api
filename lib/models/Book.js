const pool = require('../utils/pool');

class Book {
  constructor({ id, title, released, authors }) {
    this.id = id;
    this.title = title;
    this.released = released;
    this.authors = authors;
  }
  static async getAllBooks() {
    const { rows } = await pool.query('SELECT * FROM books');
    return rows.map((bookRows) => new Book(bookRows));
  }
  static async getBookById(id) {
    const { rows } = await pool.query(
      `
      SELECT books.*,
      COALESCE(json_agg(to_jsonb(authors))
      FILTER (WHERE authors.id IS NOT NULL), '[]') 
      AS authors
      FROM books
      LEFT JOIN author_books
      ON books.id = author_books.book_id
      LEFT JOIN authors
      ON author_books.author_id = authors.id
      WHERE books.id = $1
      GROUP BY books.id
        ;`,
      [id]
    );
    return new Book(rows[0]);
  }
}

module.exports = Book;
