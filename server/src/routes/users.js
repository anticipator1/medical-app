const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/users");

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
// router.get("/users", getAllUser);

// router.get("/users/:id", getUserById);
// router.delete("/users/:id", deleteExistingUser);
// router.put("/users/:id", updateExistingUser);

module.exports = router;
