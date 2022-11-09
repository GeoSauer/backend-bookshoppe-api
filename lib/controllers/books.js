const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    res.json({});
  })
  .get('/', async (req, res) => {
    const books = await Book.getAllBooks();
    res.json(books);
  });
