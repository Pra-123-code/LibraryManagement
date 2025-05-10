const express = require('express');
const mongoose = require('mongoose');
const borrowRoutes = require('./borrowerRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/borrow', borrowRoutes);

app.listen(5000, () => console.log('Borrower Service running on port 5000'));
