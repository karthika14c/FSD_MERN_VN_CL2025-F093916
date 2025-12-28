const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req,res)=>{
  try {
    const { name, phone, password, role } = req.body;
    const email = req.body.email?.trim().toLowerCase();

    if(!name || !email || !phone || !password || !role){
      return res.status(400).json({ message: "All fields are required" });
    }

    if(role === "admin"){
      const adminExists = await User.findOne({ role: "admin" });
      if(adminExists){
        return res.status(400).json({ message: "Admin already exists. Please login instead." });
      }
    }

    const emailExists = await User.findOne({ email });
    if(emailExists){
      return res.status(400).json({ message: "User already registered" });
    }

    const hash = await bcrypt.hash(password,10);

    await User.create({
      name,
      email,
      phone,
      password: hash,
      role
    });

    res.json({ message: "Registered Successfully" });

  } catch(err){
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};





exports.login = async (req,res)=>{
  try {
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;

    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password,user.password);
    if(!match){
      return res.status(400).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id:user._id, role:user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login Successful",
      token,
      role: user.role,
      id: user._id,
      name: user.name
    });

  } catch(err){
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};





exports.getProfile = async (req,res)=>{
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
};
