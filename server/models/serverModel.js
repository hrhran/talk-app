const mongoose = require('mongoose');
const serverSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a server name'],
      unique: true
    },
    display_name: {
      type: String
    },
    avatar: {
      type: String
    },
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    channels: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel'
    }],
    roles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    }],
    created_by: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Server', serverSchema);
