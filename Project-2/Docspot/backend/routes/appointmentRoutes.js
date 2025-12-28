const router = require("express").Router();
const auth = require("../middleware/auth");
const controller = require("../controllers/appointmentController");

const multer = require("multer");

// STORAGE CONFIG
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post(
  "/book",
  auth,
  upload.single("document"),
  controller.book
);


router.get("/user", auth, controller.getUserAppointments);
router.get("/doctor", auth, controller.getDoctorAppointments);

router.put("/status/:id", auth, controller.updateStatus);

module.exports = router;
