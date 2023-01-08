const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add a name']
    },
    display_name: {
      type: String
    },
    avatar: {
      type: String
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password']
    },
    servers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Server'
    }],
    messages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    }],
    roles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('User', userSchema);
