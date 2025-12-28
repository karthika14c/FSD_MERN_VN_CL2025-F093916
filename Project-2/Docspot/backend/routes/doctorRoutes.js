const router = require("express").Router();
const auth = require("../middleware/auth");
const controller = require("../controllers/doctorController");

router.post("/apply",auth,controller.applyDoctor);
router.get("/",controller.getDoctors);
router.get("/admin",auth,controller.adminGetDoctors);
router.put("/approve/:id",auth,controller.approveDoctor);

module.exports = router;
