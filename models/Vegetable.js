
const mongoose = require("mongoose");

// Schema Design
const vegetableSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name must be required"],
      trim: true,
      unique: true,
      minLength: [3, "At least 3 caracted must be provide"],
      maxLength: [30, "Name is to large"],
      lowercase: true
    },
    cetagory_name: {
        required: true,
        type: String
      },
      img: {
        required: true,
        type: String
      },
    about: {
      required: true,
      type: String
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
  }, {
    timestamps: true
  }
  )
  
  
  // Model
  const Vegetable = mongoose.model("vagetables", vegetableSchema);

  module.exports = Vegetable;