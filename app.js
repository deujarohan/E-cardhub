const express = require("express");
const userRoute = require("./src/routes/userRoutes");
const designerRoute = require("./src/routes/designerRoutes");
const app = express();

//Routes
app.use("/user", userRoute);

app.use("/designer", designerRoute);

module.exports = app;
