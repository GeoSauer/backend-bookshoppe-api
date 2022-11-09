const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const book = await Book.getBookById(req.params.id);
    const filtered = {
      id: book.id,
      title: book.title,
      released: book.released,
      authors: book.authors.map(({ id, name }) => ({ id, name })),
    };
    res.json(filtered);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAllBooks();
    res.json(books);
  });
