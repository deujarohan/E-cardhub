const mongoose = require("mongoose");

const designSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  photo: { type: String, default: "default,jpg" },
  designerName: {
    type: String,
  },
});

const Design = mongoose.model("Design", designSchema);

module.exports = Design;
