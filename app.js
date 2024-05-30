const express = require("express");
const userRoute = require("./src/routes/userRoutes");
const designerRoute = require("./src/routes/designerRoutes");
const mongoose = require("mongoose");
const app = express();

//Routes
app.use("/user", userRoute);

app.use("/designer", designerRoute);
