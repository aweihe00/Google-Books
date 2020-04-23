const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: Array,
  description:String,
  image: String,
  link: String,
  date: String,
  bookId: String
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;