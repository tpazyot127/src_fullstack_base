const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: false },
        name: {type : String, required: true},
        price: { type: String, required: false }
      }
    ],
    buyer: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String, required: false },
    updatedBy: { type: String, required: false },
    updatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);
