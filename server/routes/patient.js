const express = require("express");
const { addData, getPatients } = require("../controllers/patient");
const router = express.Router();

router.post("/patient/addData", addData);
router.get("/patients", getPatients);

// router.get("/users", getAllUser);

// router.get("/users/:id", getUserById);
// router.delete("/users/:id", deleteExistingUser);
// router.put("/users/:id", updateExistingUser);

module.exports = router;
