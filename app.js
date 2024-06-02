const express = require("express");
const userRoute = require("./src/routes/userRoutes");
const designerRoute = require("./src/routes/designerRoutes");
const designRoute = require("./src/routes/designRoutes");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

//Bodyparser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/user", userRoute);
app.use("/designer", designerRoute);
app.use("/design", designRoute);

module.exports = app;
