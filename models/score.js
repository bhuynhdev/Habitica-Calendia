//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var ScoreSchema = new mongoose.Schema({
  score: {type: Number, required: true}
});

// Duplicate the ID field.
ScoreSchema.virtual('id').get(function () {
  return this._id.toString();
});

// Ensure virtual fields are serialised.

ScoreSchema.set('toObject', { virtuals: true })

ScoreSchema.set('toJSON', {  virtuals: true });

module.exports = mongoose.model('Score', ScoreSchema);