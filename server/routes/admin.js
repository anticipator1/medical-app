const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/users");

router.post("/admin/register", registerUser);

// router.get("/users", getAllUser);

// router.get("/users/:id", getUserById);
// router.delete("/users/:id", deleteExistingUser);
// router.put("/users/:id", updateExistingUser);

module.exports = router;
