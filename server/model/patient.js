const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
	fullName: String,
	phoneNumber: Number,
	age: Number,
	nationality: String,
	passportNumber: Number,
	sex: String,

	//2nd form input
	height: Number,
	weight: Number,
	temperature: Number,
	jaundice: String,
	hernia: String,
	cardioVascular: String,
	oralDental: String,
	totalWbcCount: String,
	urea: String,
	hemoglobin: String,
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
