const AppError = require("../utils/appErrors");
const Design = require("../models/designModel");
const appfeatures = require("../utils/appfeatures");
const catchAsync = require("../utils/catchAsync");

exports.getdesign = catchAsync(async (req, res, next) => {
  const design = await Design.findById(req.params.id);
  // Design.findOne({ _id: req.params.id })

  if (!design) {
    return next(new AppError("No design found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      design,
    },
  });
});

exports.designList = catchAsync(async (req, res, next) => {
  const features = new appfeatures(Design.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const designs = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: designs.length,
    data: {
      designs,
    },
  });
});

exports.updateDesign = catchAsync(async (req, res, next) => {
  const design = await Design.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!design) {
    return next(new AppError("No design found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      design,
    },
  });
});

exports.deleteDesign = catchAsync(async (req, res, next) => {
  const design = await Design.findByIdAndDelete(req.params.id);

  if (!design) {
    return next(new AppError("No design found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
