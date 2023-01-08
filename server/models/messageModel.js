const mongoose = require('mongoose');
const messageSchema = mongoose.Schema(
  {
    message: {
      type: String
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel'
    },
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Server'
    },
    attachment: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Message', messageSchema);
