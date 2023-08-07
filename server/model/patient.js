const mongoose = require("mongoose");
// const autoIncrement = require("mongoose-auto-increment");
const patientSchema = new mongoose.Schema({
	userId: { type: Number, unique: true, default: 0 },
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

patientSchema.pre("save", async function (next) {
	const doc = this;

	// Only generate and set userId if it's a new document
	if (!doc.isNew) {
		return next();
	}

	try {
		// Find the highest existing userId
		const highestUserId = await this.constructor
			.findOne()
			.sort("-userId")
			.exec();

		if (highestUserId) {
			// Increment the highest userId and set it for the new document
			doc.userId = highestUserId.userId + 1;
		} else {
			// If no documents exist yet, start from 1
			doc.userId = 1;
		}

		next();
	} catch (error) {
		return next(error);
	}
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
