const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("../routes/users");
const adminRoutes = require("../routes/admin");
const connectDb = require("../db/connection.js");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());
app.use(userRoutes);
app.use(adminRoutes);

connectDb();
const port = 3005;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
