const mongoose = require("mongoose");
const Appointment = require("../models/Appointment");

const Doctor = require("../models/Doctor");

exports.book = async(req,res)=>{
  const doctor = await Doctor.findById(req.body.doctorId);
  await Appointment.create({
    userId: req.user.id,
    doctorId: doctor.userId,
    date: req.body.date,
    document: req.file ? `/uploads/${req.file.filename}` : null,   // ⬅️ important
    status: "pending"
  });

  res.json("Appointment Booked");
};


exports.getUserAppointments = async (req, res) => {
  const data = await Appointment.find({ userId: req.user.id })
    .populate("doctorId", "name specialization fees");

  res.json(data);
};

exports.getDoctorAppointments = async (req, res) => {
  const data = await Appointment.find({ doctorId: req.user.id })
    .populate("userId", "name email phone");  

  res.json(data);
};

exports.updateStatus = async (req, res) => {
  try {
    const appt = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!appt) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.json({ message: "Updated", appointment: appt });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

