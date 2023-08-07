const User = require("../model/user");
const bcrypt = require("bcrypt");
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
	// getAllUser,
	// getUserById,
	// deleteExistingUser,
	// updateExistingUser,
};
