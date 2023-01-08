const mongoose = require('mongoose');
const messageSchema = mongoose.Schema(
  {
    messages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    }],
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Server'
    },
    created_by: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Message', messageSchema);
