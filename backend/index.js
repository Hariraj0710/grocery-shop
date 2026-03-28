require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Fallback to local MongoDB if not set, required for quick start without full setup
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/grocery_shop';

mongoose.connect(uri)
  .then(() => console.log('MongoDB connection established successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const productsRouter = require('./routes/products');
app.use('/api/products', productsRouter);

const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Grocery Shop API is running...');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
