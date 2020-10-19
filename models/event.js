//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var EventSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String},
  completed: {type: Boolean, required: true},
  show: {type: Boolean, require: true}, // Whether to show on DashBoard or not
  startTime: {type: String, required: true}, // Savetime in UTC timezone
  endTime: {type: String, required: true}, // Save time in UTC timezone
  timeZone: {type: String, required: true} // The user's local timeZone to format from UTC time to local time
});

// Duplicate the ID field.
EventSchema.virtual('id').get(function () {
  return this._id.toString();
});

// Ensure virtual fields are serialised.

EventSchema.set('toObject', { virtuals: true })

EventSchema.set('toJSON', {  virtuals: true });

module.exports = mongoose.model('Event', EventSchema);