const Borrow = require('./Borrower');

exports.borrowBook = async (req, res) => {
  const borrow = new Borrow(req.body);
  await borrow.save();
  res.status(201).json(borrow);
};

exports.getBorrows = async (req, res) => {
  const borrows = await Borrow.find();
  res.status(200).json(borrows);
};
