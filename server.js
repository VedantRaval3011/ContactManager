const express = require("express");
const errorHandler = require("./middleware/errorHandler.middleware.js");
const connectDb = require("./config/dbConnection.js");

const dotenv = require("dotenv").config();

connectDb()
const app = express()

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contact.route.js"));
app.use("/api/users", require("./routes/user.route.js"));
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})