const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	phoneNumber: { type: String, unique: [true, "That username is taken."] },
	role: {
		type: String,
		enum: ["customer", "admin", "vendor"],
		default: "customer",
	},
});

const User = mongoose.model("User", userSchema);
module.exports = User;
