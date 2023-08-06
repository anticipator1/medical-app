const Patient = require("../model/patient");
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

module.exports = {
	addData,
	getPatients,
};
