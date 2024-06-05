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
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
    //This below method convert (4.666667) to 4.7
    set: (val) => Math.round(val * 10) / 10,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
});

const Design = mongoose.model("Design", designSchema);

module.exports = Design;
