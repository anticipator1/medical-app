const Patient = require("../model/patient");

const mongoose = require("mongoose");

const addData = async (req, res) => {
	try {
		// const { fullName, phoneNumber, age, nationality, passportNumber, sex } =
		// 	req.body;
		const { fullName, phoneNumber, age, nationality, passportNumber, sex } =
			req.body;

		let imagePath = null;

		if (req.file) {
			imagePath = req.file.path; // Store the image path if an image was uploaded
			console.log(imagePath);
		}

		const patientData = await Patient.create({
			fullName,
			phoneNumber,
			age,
			nationality,
			passportNumber,
			sex,
		});
		res.json({
			msg: "success",
			patientData,
		});
	} catch (error) {
		console.log(error);
	}
};

const getPatients = async (req, res) => {
	try {
		const patientData = await Patient.find();
		res.json({
			msg: "success",
			patientData,
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
};
