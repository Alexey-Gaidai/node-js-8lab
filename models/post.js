const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  review: [{
    name: String,
    reviewMessage: String,
    mark: {
      type: Number,
      min: 0,
      max: 10
    }
  }]
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;