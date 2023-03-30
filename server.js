
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = require("./index.js");



// const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.DB_PASSWORD}@cluster0.p8qnexq.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.DB_PASSWORD}@cluster0.p8qnexq.mongodb.net/kachaBazar?retryWrites=true&w=majority`;


mongoose.connect(uri).then(() => {
    console.log(`Database connection successfully`);
    console.log(mongoose.connection.db.databaseName);
})

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});