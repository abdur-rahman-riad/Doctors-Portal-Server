const express = require("express");
const { MongoClient } = require('mongodb');
const cors = require("cors");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors);

// Database Connection URL
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j6nwy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Run Function
async function run() {
    try {
        await client.connect();
        console.log("Database Connected Successfully");
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


// Default GET and LISTEN
app.get("/", (req, res) => {
    res.send("Doctors Portal Server Running...");
});
app.listen(port, () => {
    console.log("Listening PORT: ", port);
});