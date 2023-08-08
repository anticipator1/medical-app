const Patient = require("../model/patient");
const mongoose = require("mongoose");
const addData = async (req, res) => {
	try {
		// const { fullName, phoneNumber, age, nationality, passportNumber, sex } =
		// 	req.body;

		const patientData = await Patient.create(req.body);
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

module.exports = {
	addData,
	getPatients,
	getPatient,
};
