const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

require("dotenv").config();

const PORT = process.env.PORT || 8070;


app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
    
});

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb connection success!!");
})

//if we call backend in frontend using http://localhost:8070/photographyweb(backend URL) -> load the js file which assign the potographerRouter
const potographerRouter = require("./routes/photographs.js");
app.use("/photographyweb", potographerRouter);


const CustomerContactRouter = require("./routes/Customer_Contacts.js");
app.use("/customercontact",CustomerContactRouter);

const SignupRouter = require("./routes/users.js");
app.use("/webuser",SignupRouter);

app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
    console.log(`Server is up and runnig on port number : ${PORT}`)
})
