const express = require("express");
const path = require("path");

const {
	addData,
	getPatients,
	getPatient,
	editPatient,
	getPatientImageById,
} = require("../controllers/patient");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
	destination: "./uploads/",
	filename: function (req, file, cb) {
		// const imageExtension = path.extname(file.originalname);
		// cb(
		// 	null,
		// 	Date.now() + "-" + Math.round(Math.random() * 1e9) + imageExtension
		// );
		// cb(null, Date.now() + "-" + Math.round(Math.random() * 1e9) + ".jpg");
		const uniquePhotoName = Date.now() + "-" + Math.round(Math.random() * 1e9);
		//const imageExtension = path.extname(file.originalname);
		console.log("original", file.originalname);
		console.log("extension:", path.extname(file.originalname));
		let imageName;
		if (path.extname(file.originalname)) {
			imageName = uniquePhotoName + file.originalname;
			console.log("finalname:", imageName);
		} else {
			imageName = uniquePhotoName + ".jpeg";
			console.log("finalname:", imageName);
		}

		// // if (imageExtension == "blob") {
		// // 	imageName = uniqueSuffix + file.originalname + "jpeg";
		// // }
		// console.log("filename", file.originalname);

		cb(null, imageName);
	},
});

const upload = multer({ storage: storage });

router.post("/patient/addData", upload.single("image"), addData);
router.get("/patients", getPatients);
router.get("/patient/:id", getPatient);
router.get("/patient-image/:id", getPatientImageById);
router.put("/patient/:id", editPatient);

// router.get("/users", getAllUser);

// router.get("/users/:id", getUserById);
// router.delete("/users/:id", deleteExistingUser);
// router.put("/users/:id", updateExistingUser);

module.exports = router;
