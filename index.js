const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

const vegetableRoute = require('./routes/VegetableRoutes');
const fruitRoute = require('./routes/FruitsRoutes');
const fishRoute = require('./routes/FishRoutes');
const bookingRoute = require('./routes/BookingRoute');
const addProductRoute = require('./routes/AddProductRoute');
const userRoute = require('./routes/UserRoute');
const allBookingsRoute = require('./routes/AllBookingRoutes');
const User = require("./models/User");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});


// query
app.use('/vagetable', vegetableRoute);
app.use('/fruit', fruitRoute);
app.use('/fish', fishRoute);
app.use('/bookings', bookingRoute);
app.use('/addProduct', addProductRoute);
app.use('/user', userRoute);
app.use('/allBookings', allBookingsRoute);


app.get('/jwt', async (req, res) => {
    const email = req.query.email;
    const query = { email: email }
    const user = await User.findOne(query);
    if (user) {
        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN) //, {expiresIn: '1h'}
        return res.send({ accessToken: token })
    }
    res.status(403).send({ accessToken: '' })
})


module.exports = app;