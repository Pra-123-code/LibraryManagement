const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
  bookId: String,
  userId: String,
  borrowDate: { type: Date, default: Date.now },
  returnDate: Date,
});

module.exports = mongoose.model('Borrow', borrowSchema);
