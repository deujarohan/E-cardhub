const mongoose = require("mongoose");
const dotenv = require("dotenv");

//connecting to mongo
dotenv.config({ path: "./config.env" });

//replace password from env
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

//one way to connect mongoose
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(DB);
    console.log(
      `Mongo connected DB host:${connectionInstance.connection.host}`,
    );
  } catch (err) {
    console.log("DB connection failed");
    process.exit(1);
  }
};

connectDB();

//another way to connect mongoose
// mongoose
//   .connect(DB)
//   .then(() => console.log("DB connection successful!"))
//   .catch((err) => {
//     console.log("DB connection failed");
//   });

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
