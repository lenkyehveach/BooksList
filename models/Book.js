const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
  //international standard book number 
  isbn: {
    type: String,
    requiered: true
  },
  author: {
    type: String, 
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  },
  updated_date: {
    type: Date, 
    default: Date.now
  }
});

module.exports = Book = mongoose.model('book', BookSchema)
//esport Book as a new instance of mongo model, w 'book' being the name of 
//the database, and the schema - BookSchema