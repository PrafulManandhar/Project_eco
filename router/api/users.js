const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const databaseOptions = require("../../config/database");
const mysqlConnection = mysql.createConnection(databaseOptions);
mysqlConnection.connect();

const tokenExpiration = 3600;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: "thisisdummypraful@gmail.com",
    pass: "helloworldpraful123-"
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailOption = {
  from: "thisisdummypraful@gmail.com", //sender address
  to: "praful.manandhar@es.cloudfactory.com", //list of recivers
  subject: "Please confirm your Email account", //subject line
  html: "<p>If you are seeing this then there is error!</p>" //plain text body
};

//@route POST api/users/login
//@desc  Insert user route
//@access
router.post("/login", (req, res) => {
  console.log("This is inside the post api/user/login");
  // const { errors, isValid } = validateLogin(req.body);
  const isValid = true;
  //Check Validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let statement = "SELECT * FROM evcustomer WHERE ev_email=?";

  let { email, password } = req.body;
  mysqlConnection.query(statement, email, (err, rows) => {
    if (!err && rows[0]) {
      if (bcrypt.compare(password, rows[0].ev_password)) {
        //"Authorized"
        //0 is Active 1 is Inactive

        let statement2 =
          "UPDATE evcustomer SET login_status=? WHERE ev_email=? ;";
        mysqlConnection.query(statement2, ["online", email], (err, results) => {
          if (!err) {
            const payload = {
              email: rows[0].ev_email
              // id:row[0].ev_id
            };
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: tokenExpiration
              },
              (err, token) => {
                res.json({ success: true, token: `Bearer ` + token });
              }
            );
          } else {
            res.json({ error: "Failed to update user status" });
          }
        });
      } else {
        res.json({ error: "Unauthorized User" });
      }
    } else {
      //Not authorized"
      res.status(400).json({ error: "Unauthorized" });
    }
  });
});


//@route post api/users/
//it is called from signupasreciver
router.post("/signupasreciver", (req, res) => {
  // Check Validation
  const isValid = true;
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let { username, password, address, email, mobile } = req.body;
  let statement =
    "INSERT INTO evcustomer (ev_username,ev_password,ev_address,ev_email,ev_mobile) VALUES (?,?,?,?,?);";
  //Generate salt and hash it
  let salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);
  mysqlConnection.query(
    statement,
    [username, password, address, email, mobile],
    (err, results) => {
      if (!err) {
        const payload = {
          email
        };
        jwt.sign(
          payload,
          keys.secretOrkey,
          {
            expiresIn: tokenExpiration
          },
          (err, token) => {
            mailOption.html = `Hello,${username}!<br>Please Click on the link to verify your email.<a style="color:red" href="http://localhost:5000/api/users/confirmations/${token}/">Click here to verify</a>`;
            transporter.sendMail(mailOption, (err, info) => {
              if (err) {
                console.log(err);
              } else {
                console.log({
                  success: "This is sending email"
                });
              }
            });
          }
        );
        res.json({ success: true });
      } else {
        res.json(err);
      }
    }
  );
});


router.post("/signupasprovider", (req, res) => {
  // Check Validation
  const isValid = true;
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let {
    username,
    password,
    address,
    email,
    mobile,
    longitude,
    latitude
  } = req.body;
  let statement =
    "INSERT INTO homeowner (ow_username,ow_password,ow_address,ow_email,ow_mobile,ow_longitude,ow_latitude) VALUES (?,?,?,?,?,?,?);";
  //Generate salt and hash it
  let salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);
  console.log("longitude",longitude)
  mysqlConnection.query(
    statement,
    [username, password, address, email, mobile, longitude, latitude],
    (err, results) => {
      if (!err) {
        const payload = {
          email: email
        };
        jwt.sign(
          payload,
          keys.secretOrkey,
          {
            expiresIn: tokenExpiration
          },
          (err, token) => {
            mailOption.to = `${email}`;
            mailOption.html = `Hello,${username}!<br>Please Click on the link to verify your email.<a style="color:red" href="http://localhost:5000/api/users/confirmation/${token}/">Click here to verify</a>`;
            transporter.sendMail(mailOption, (err, info) => {
              if (err) {
                console.log(err);
              } else {
                console.log({
                  success: "This is sending email",
                  
                });
                console.log(token)
              }
            });
          }
        );
        res.json({ success: "User Added" });
      } else {
        res.json(err);
      }
    }
  );
});


//@route GET api/users/current
//@desc  Return current user
//@access Private
router.get("/dashboard",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.json(req.user)
    });
     

   //@route GET api/users/confirmation/:token
//@desc  Insert user route
//@access
router.get("/confirmation/:token", (req, res) => {
  try {
    const { email } = jwt.verify(req.params.token, keys.secretOrKey);
    console.log("confirmation/token",email);
    let statement =
      'UPDATE homeowner SET ow_userstatus = "active" WHERE ow_email=?;';
    mysqlConnection.query(statement, email, (err, results) => {
      if (!err) res.json({ success: "Email is now verified" });
      else {
        res.json({ err });
      }
    });
  } catch (e) {
    res.json(e);
  }
});


  //@route GET api/users/confirmation/:token
//@desc  Insert user route
//@access
router.get("/confirmations/:token", (req, res) => {
  try {
    const { email } = jwt.verify(req.params.token, keys.secretOrKey);
    console.log("confirmation/token",email);
    let statement =
      'UPDATE evcustomer SET ev_status = "active" WHERE ev_email=?;';
    mysqlConnection.query(statement, email, (err, results) => {
      if (!err) res.json({ success: "Email is now verified" });
      else {
        res.json({ err });
      }
    });
  } catch (e) {
    res.json(e);
  }
});
 //@route GET api/users/location
    //@desc Return Location of homeowner

    router.get("/location",(req,res)=>{
      let statement = "SELECT ow_longitude,ow_latitude FROM homeowner";
      mysqlConnection.query(statement,(err,result)=>{
        if(!err)
      res.json(result)  
      else {
        res.json(err)
      }  
  })
    })

router.get("/test",(res,req)=>res.json({hello:hi}));

module.exports=router;
