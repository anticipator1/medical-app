const User = require("../model/user");
const registerUser = async (req, res) => {
	try {
		req.body.role = "customer";
		const data = await User.create(req.body);
		res.json({
			msg: "success",
			data,
		});
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
	registerUser,
	// getAllUser,
	// getUserById,
	// deleteExistingUser,
	// updateExistingUser,
};
