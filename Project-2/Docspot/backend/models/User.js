const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: {
    type: String,
    required: true
  },
  role: { type: String, enum: ["user", "doctor", "admin"], default: "user" },
  isAdminRegistered: { type: Boolean, default: false },
  notifications: [],
});

module.exports = mongoose.model("User", userSchema);
