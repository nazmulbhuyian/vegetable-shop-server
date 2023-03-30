


const mongoose = require("mongoose");

// Schema Design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be required"],
        minLength: [3, "At least 3 caracted must be provide"],
        maxLength: [30, "Name is to large"],
        lowercase: true
      },
      role: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true
      }
  }, {
    timestamps: true
  }
  )
  
  
  // Model
  const User = mongoose.model("users", userSchema);

  module.exports = User;