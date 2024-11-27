const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes for products, users, orders, etc.
app.get('/products', (req, res) => {
  // Fetch products from the database
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ error: err.message }));
});

// ... other routes for user authentication, order processing, etc.

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});