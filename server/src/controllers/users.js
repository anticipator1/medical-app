const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const registerUser = async (req, res) => {
	try {
		req.body.role = "customer";
		const matched = await User.exists({ phoneNumber: req.body.phoneNumber });
		if (matched) {
			res.status(409).json({
				msg: "Phone number already exist",
			});
		} else {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			req.body.password = hashedPassword;
			const data = await User.create(req.body);
			res.json({
				msg: "Login successful",
				data,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

const loginUser = async (req, res) => {
	const userData = await User.findOne({
		phoneNumber: req.body.phoneNumber,
	}).lean();

	if (userData) {
		const isMatched = await bcrypt.compare(
			req.body.password,
			userData.password
		);
		if (isMatched) {
			const { password, ...userDetails } = userData;
			const secretKey = crypto.randomBytes(32).toString("hex");
			const token = jwt.sign({ id: userData._id }, secretKey);
			res.json({
				success: true,
				token,
				userDetails,
			});
		} else {
			res.json({
				success: false,
				msg: "incorrect login credentials",
			});
		}
	} else {
		res.json({
			success: false,
			msg: "no user found",
		});
	}
};

// const getAllUser = async (req, res) => {
// 	const data = await Users.find();
// 	res.json({
// 		msg: "success",
// 		data: data,
// 	});
// };

// const getUserById = async (req, res) => {
// 	const data = await Users.findById(req.params.id);
// 	res.json({
// 		msg: "success",
// 		data: data,
// 	});
// };
// const deleteExistingUser = async (req, res) => {
// 	const data = await Users.findByIdAndDelete(req.params.id);
// 	res.json({
// 		msg: "success",
// 		data: data,
// 	});
// };

// const updateExistingUser = async (req, res) => {
// 	const data = await Users.findByIdAndUpdate(req.params.id, req.body);
// 	res.json({
// 		msg: "success",
// 		data: data,
// 	});
// };

module.exports = {
	registerUser,
	loginUser,
	// getAllUser,
	// getUserById,
	// deleteExistingUser,
	// updateExistingUser,
};
