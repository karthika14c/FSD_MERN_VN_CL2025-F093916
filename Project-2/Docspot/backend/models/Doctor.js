const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  specialization: String,
  experience: String,
  fees: String,
  timing: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Doctor", doctorSchema);
