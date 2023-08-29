const Patient = require("../model/patient");

const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const addData = async (req, res) => {
	req.body.patientImage = req.file.filename;
	try {
		const patientData = await Patient.create(req.body);

		res.json({
			msg: "success",
			patientData,
		});
	} catch (error) {
		console.log(error);
	}

	// try {

	// 	// const { fullName, phoneNumber, age, nationality, passportNumber, sex } =
	// 	// 	req.body;
	// 	if (req.body.imageSrc) {
	// 		const { imageSrc } = req.body;
	// 		const base64Data = imageSrc.replace(/^data:image\/jpeg;base64,/, "");
	// 		const imagePath = path.join(__dirname, "uploads", req.file.filename);
	// 		fs.writeFile(imagePath, base64Data, "base64", (err) => {
	// 			if (err) {
	// 				res.json({
	// 					msg: "error",
	// 				});
	// 			}
	// 			res.json({
	// 				msg: "success",
	// 				patientData,
	// 			});
	// 		});
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }

	// 	let imagePath = null;

	// 	if (req.file) {
	// 		imagePath = req.file; // Store the image path if an image was uploaded
	// 		console.log(imagePath);
	// 		//req.body.patientImage = imagePath;
	// 	}
	// 	console.log(path.join(__dirname, "../../", "uploads"));
	//
	// 	res.json({
	// 		msg: "success",
	// 		patientData,
	// 	});
	// } catch (error) {
	// 	console.log(error);
	// }
};

const getPatients = async (req, res) => {
	try {
		const totalCount = await Patient.find().count();
		const skipCount = (req.query.page - 1) * req.query.limit;
		const patientData = await Patient.find()
			.limit(req.query.limit)
			.skip(skipCount);
		//const patientData = await Patient.find();
		res.json({
			msg: "success",
			patientData,
			totalCount,
		});
	} catch (error) {
		console.log(error);
	}
};

const getPatient = async (req, res) => {
	try {
		const dataExist = await Patient.exists({ _id: req.params.id });
		console.log(dataExist);
		const patientData = await Patient.findById(req.params.id);
		if (patientData) {
			res.json({
				msg: "success",
				patientData,
			});
			// console.log(patientData);
		} else {
			res.json({ error: "Item not found" });
		}
	} catch (error) {
		console.log(error);
	}
};

const getPatientImageById = async (req, res) => {
	const data = await Patient.findById(req.params.id);
	const patientImage = await path.join(
		__dirname,
		"../../",
		"uploads/",
		data.patientImage
	);

	res.sendFile(patientImage);
};

const editPatient = async (req, res) => {
	const newData = req.body;

	try {
		const dataExist = await Patient.exists({ _id: req.params.id });
		if (dataExist) {
			const updatedData = await Patient.findByIdAndUpdate(
				req.params.id, // Replace with the specific document ID
				{ $set: newData }, // Use $set to update existing fields or append new fields
				{ new: true }
			);

			res.json({
				msg: "success",
				updatedData,
			});
		} else {
			res.json({
				msg: "no user exist",
			});
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	addData,
	getPatients,
	getPatient,
	editPatient,
	getPatientImageById,
};
