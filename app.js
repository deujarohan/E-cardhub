const express = require("express");
const userRoute = require("./src/routes/userRoutes");
const app = express();

const port = process.env.PORT || 8000;

//Routes
app.use("/", userRoute);

app.listen(port, () => {
  console.log(`Application is running in ${port} port.`);
});
