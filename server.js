const mongoose = require("mongoose");
const dotenv = require("dotenv");

//connecting to mongo
dotenv.config({ path: "./config.env" });

//replace password from env
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"))
  .catch((err) => {
    console.log("DB connection failed");
  });

const app = require("./app");
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Application is running in ${port} port.`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
