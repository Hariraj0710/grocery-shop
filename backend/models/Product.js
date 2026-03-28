const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true }, // e.g., '1 kg', '500 g', '1 pack'
  image: { type: String, required: true }, // URL or path
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
