const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
require("dotenv").config()
app.use(cors());
app.use(express.json());


const studentRoutes = require("./src/routers/studentRoutes");
app.use("/students", studentRoutes);

const productRoutes = require("./src/routers/productRoutes");
app.use("/products", productRoutes);

mongoose.connect(process.env.MONGODB_CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (error) => {
    console.log("Mongodb error : ", error);
});

db.once("open", () => {
    console.log("Mongodb connected sucessfully!");
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`server is running on ${port} port`);
    });
});