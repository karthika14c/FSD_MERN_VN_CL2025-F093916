const Doctor = require("../models/Doctor");
const User = require("../models/User");

exports.applyDoctor = async (req, res) => {
  const exists = await Doctor.findOne({ userId: req.user.id });

  if (exists) {
    return res.json({ message: "You already applied" });
  }
  await Doctor.create({
    ...req.body,
    userId: req.user.id,
    status: "pending"
  });

  res.json({ message: "Doctor Request Sent" });
};

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find({ status: "approved" });
  res.json(doctors);
};

exports.adminGetDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

exports.approveDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    doctor.status = req.body.status || "approved";
    await doctor.save();

    if (doctor.status === "approved") {
      await User.findByIdAndUpdate(
        doctor.userId,
        { role: "doctor" },
        { new: true }
      );
    }
    if (doctor.status === "rejected") {
      await User.findByIdAndUpdate(
        doctor.userId,
        { role: "user" },
        { new: true }
      );
    }

    res.json({ message: "Doctor status updated successfully" });
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
