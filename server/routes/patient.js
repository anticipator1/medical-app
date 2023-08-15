const express = require("express");
const {
	addData,
	getPatients,
	getPatient,
	editPatient,
} = require("../controllers/patient");
const router = express.Router();

router.post("/patient/addData", addData);
router.get("/patients", getPatients);
router.get("/patient/:id", getPatient);
router.put("/patient/:id", editPatient);

// router.get("/users", getAllUser);

// router.get("/users/:id", getUserById);
// router.delete("/users/:id", deleteExistingUser);
// router.put("/users/:id", updateExistingUser);

module.exports = router;
