const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    content: { type: String, required: false },
    price: { type: String, required: false },
    sale_price: { type: String, required: false },
    image: { type: String, required: false },
    images: [{ type: String, required: false }],
    status: { type: String, required: false },
    categoryId: [{ type: Schema.Types.ObjectId, ref: 'ProductCategory' }],
    createdAt: { type: Date, default: Date.now },
    createdBy : { type: String, required: false},
    updatedAt : { type: Date, default: Date.now},
    updatedBy: { type: String, required: false}
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema);