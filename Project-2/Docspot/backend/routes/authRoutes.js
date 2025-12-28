const router = require("express").Router();
const auth = require("../middleware/auth");

const { 
  register, 
  login, 
  getProfile 
} = require("../controllers/authController");

const User = require("../models/User");
router.post("/register", register);

router.post("/login", login);
router.get("/get-users", async (req,res)=>{
  const users = await User.find({ role: { $ne: "doctor" } });
  res.json(users);
});

router.get("/me", auth, getProfile);

module.exports = router;
