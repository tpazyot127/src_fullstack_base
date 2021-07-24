const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema (
  {
    title: {type: String, required: true},
    description: {type: String, required: false},
    content: {type: String, required:false},
    status: {type: String, required:false},
    image: {type: String, required:false},
    categories:  [{ type: Schema.Types.ObjectId, ref: 'PostCategory' }],
    createdAt: {type: Date, default: Date.now},
    createdBy : {type:String, required:false},
    updateAt : {type: Date, default: Date.now},
    updateBy : {type:String, required:false},
  }
);

module.exports = mongoose.model('Post', postSchema);
