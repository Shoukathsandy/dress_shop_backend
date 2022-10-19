const mongoose = require("mongoose");

const dressSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    varients: [],
    prices: [],
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const dressModel = mongoose.model("dress", dressSchema);
module.exports = dressModel;
