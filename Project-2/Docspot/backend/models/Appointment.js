const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",     
    required: true
  },

  date: String,
  document: { type: String },


  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
