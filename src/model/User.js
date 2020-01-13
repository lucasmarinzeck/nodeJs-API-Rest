const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Schema = mongoose.Schema;

let userSchema = new Schema({
  userName: { type: String,
              required: true },
  email: { type: String,
           required: true },
  password: { type: String,
              required: true },
  createdAt: { type: Date,
               default: Date.now },
});

let User = mongoose.model('users', userSchema);

module.exports = User;