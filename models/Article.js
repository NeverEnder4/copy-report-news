const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  article: {
    type: Schema.Types.Mixed,
    required: true,
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'users', required: true }],
});

module.exports = Article = mongoose.model('articles', ArticleSchema);
