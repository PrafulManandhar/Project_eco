const express= require("express");
const app = express();
const bodyParser=require("body-parser");
const passport =require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const cors = require("cors");
app.use(cors());

app.use(passport.initialize());
//Passport config
require('./config/passport.js')(passport);



//Routes
const users=require("./router/api/users");
app.use("/api/users",users);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));