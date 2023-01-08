const mongoose = require('mongoose');
const roleSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    power: {
      type: Number
    },
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Server'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Role', roleSchema);
