const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  message: { type: String, required: [true, 'Cannot send an empty message'], maxlength: 2000 },
  date: { type: Date, default: Date.now() },
  author: { type: String, required: [true, 'Author is required'] },
  receiver: { type: String, required: [true, 'Must specify a reciever'] },
});

module.exports = mongoose.model('messageModelHackathonTeam', messageSchema);
