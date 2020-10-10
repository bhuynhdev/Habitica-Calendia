//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var EventSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String},
  completed: {type: Boolean, required: true},
  show: {type: Boolean, require: true}, // Whether to show on DashBoard or not
  startTime: {type: String, required: true},
  endTime: {type: String, required: true}
});

// Duplicate the ID field.
EventSchema.virtual('id').get(function () {
  return this._id.toString();
});

// Ensure virtual fields are serialised.

EventSchema.set('toObject', { virtuals: true })

EventSchema.set('toJSON', {  virtuals: true });

module.exports = mongoose.model('Event', EventSchema);