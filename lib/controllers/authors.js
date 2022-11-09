const { Router } = require('express');
const Author = require('../models/Author');

module.exports = Router()
  .get('/1', async (req, res) => {
    res.json({});
  })
  .get('/', async (req, res) => {
    const authors = await Author.getAllAuthors();
    res.json(authors);
  });
