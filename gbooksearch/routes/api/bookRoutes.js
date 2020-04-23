const router = require('express').Router();
const booksController = require('../../controllers/booksController');

router
  .route('/')
  .get(booksController.findAll)
  .post(booksController.saveBook);

router
  .route('/:id')
  .get(booksController.findById)
  .delete(booksController.deleteBook);

module.exports = router;