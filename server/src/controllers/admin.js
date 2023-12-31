const User = require("../model/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const registerAdmin = async (req, res) => {
	try {
		req.body.role = "admin";
		const matched = await User.exists({ phoneNumber: req.body.phoneNumber });
		if (matched) {
			res.status(409).json({
				msg: "Admin already exist",
			});
		} else {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);
			req.body.password = hashedPassword;
			const data = await User.create(req.body);
			res.json({
				msg: "success",
				data,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

const loginAdmin = async (req, res) => {
	const user = await User.findOne({ phoneNumber: req.body.phoneNumber });

	if (user) {
		const isMatched = await bcrypt.compare(req.body.password, user.password);
		if (isMatched) {
			const secretKey = crypto.randomBytes(32).toString("hex");
			const token = jwt.sign({ id: user._id }, secretKey);
			res.json({
				success: true,
				token,
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
	registerAdmin,
	loginAdmin,
	// getAllUser,
	// getUserById,
	// deleteExistingUser,
	// updateExistingUser,
};
