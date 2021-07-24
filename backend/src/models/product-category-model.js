const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const productCategorySchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    status: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    createdBy : { type: String, required: false},
    updatedAt : { type: Date, default: Date.now},
    updatedBy: { type: String, required: false}
  },
  { timestamps: true }
)

module.exports = mongoose.model('ProductCategory', productCategorySchema);