

const mongoose = require("mongoose");

// Schema Design
const bookingSchema = new mongoose.Schema({
    productName: {
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
    count: {
      required: true,
      type: Number
    },
    email: {
      required: true,
      type: String
    },
    old_price: {
      type: Number,
      required: true,
      min: 0
    },
    new_price: {
      type: Number,
      min: 0
    },
    newPrice: {
      type: Number,
      min: 0
    }
  }, {
    timestamps: true
  }
  )
  
  
  // Model
  const Booking = mongoose.model("bookings", bookingSchema);

  module.exports = Booking;