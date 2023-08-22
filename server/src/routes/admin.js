const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin } = require("../controllers/admin");

router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

// router.get("/users", getAllUser);

// router.get("/users/:id", getUserById);
// router.delete("/users/:id", deleteExistingUser);
// router.put("/users/:id", updateExistingUser);

module.exports = router;
