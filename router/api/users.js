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
  to: "manandhar.praful13@gmail.com", //list of recivers
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

  let statement = "SELECT * FROM evcustomer WHERE ev_email=? ";

  let { email, password } = req.body;
  mysqlConnection.query(statement, [email], (err, rows) => {
    if (!err && rows[0]) {
      if (bcrypt.compare(password, rows[0].ev_password)) {
        //"Authorized"
        //0 is Active 1 is Inactive

        let statement2 =
          "UPDATE evcustomer SET login_status=? WHERE ev_email=? ;";
        mysqlConnection.query(statement2, ["online", email], (err, results) => {
          if (!err) {
            const payload = {
              email: rows[0].ev_email,
              role: rows[0].Role
              // id:row[0].ev_id
            };
            jwt.sign(
              payload,
              keys.secretOrkey,
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
      }
    } else {
      //Not authorized"
      res.json({ success: false });
    }
  });
});

//@route POST api/users/homelogin
//@desc  Insert user route
//@access
router.post("/homelogin", (req, res) => {
  console.log("This is inside the post api/user/homelogin");
  // const { errors, isValid } = validateLogin(req.body);
  const isValid = true;
  //Check Validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }

  let statement = "SELECT * FROM homeowner WHERE ow_email=? && ow_userstatus=?";

  let { email, password } = req.body;
  console.log("email n  ", email);
  mysqlConnection.query(statement, [email, "active"], (err, rows) => {
    console.log("rows inside homelogin", rows);
    if (!err && rows[0]) {
      if (bcrypt.compare(password, rows[0].ow_password)) {
        //"Authorized"
        //0 is Active 1 is Inactive

        let statement2 =
          "UPDATE homeowner SET login_status=? WHERE ow_email=? ;";
        mysqlConnection.query(statement2, ["online", email], (err, results) => {
          if (!err) {
            const payload = {
              email: rows[0].ow_email,
              role: rows[0].Role
              // id:row[0].ev_id
            };
            jwt.sign(
              payload,
              keys.secretOrkey,
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
      }
    } else {
      //Not authorized"
      res.json({ successssss: false });
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

          (err, token) => {
            if (!err) {
              console.log("token", token);
              // mailOption.to = `${email}`;
              mailOption.html = `Hello,${username}!<br>Please Click on the link to verify your email.<a style="color:red" href="http://localhost:5000/api/users/evconfirmation/${token}/">Click here to verify</a>`;
              transporter.sendMail(mailOption, (err, info) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log({
                    success: "This is sending email"
                  });
                  console.log("token", token);
                }
              });
            } else {
              console.log("err", err);
            }
          }
        );
        res.json({ success: true });
      } else {
        res.json({ success: false });
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
  console.log("longitude", longitude);
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

          (err, token) => {
            if (!err) {
              console.log("token", token);
              // mailOption.to = `${email}`;
              mailOption.html = `Hello,${username}!<br>Please Click on the link to verify your email.<a style="color:red" href="http://localhost:5000/api/users/confirmation/${token}/">Click here to verify</a>`;
              transporter.sendMail(mailOption, (err, info) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log({
                    success: "This is sending email"
                  });
                  console.log("token", token);
                }
              });
            } else {
              console.log("err", err);
            }
          }
        );
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    }
  );
});

//@route GET api/users/current
//@desc  Return current user
//@access Private
router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

//@route GET api/users/current
//@desc  Return current user
//@access Private
router.get(
  "/homeownerdashboard",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

//@route GET api/users/confirmation/:token
//@desc  Insert user route
//@access
router.get("/confirmation/:token", (req, res) => {
  if (!req.params.token) return;
  try {
    const { email } = jwt.verify(req.params.token, keys.secretOrkey);
    console.log("confirmation/token", email);
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

//@route to api/users/denybooking
// It deny the booking of the evcustomer

router.put(`/denybooking`,(req,res)=>{
  let {email,bo_id} = req.body;
  
  let statement="update booking set booking_status=? where bo_id=? ";
  mysqlConnection.query(statement,["rejected",bo_id],(err,results)=>{
    if(!err){
      if(results.affectedRows !==0){
        res.json({type:"success" , message:"Booking Rejected Successfully"})
      }else{
        res.json({type:"error", message:"Error while Rejecting the Booking"})
      }
    }else{
      res.json({errors:errors})
    }
  })
})

router.put("/acceptbooking",(req,res)=>{
  let {bo_id} = req.body;
  console.log("bo_id",bo_id)
  let statement="update booking set booking_status=? where bo_id=? ";
  mysqlConnection.query(statement,["accepted",bo_id],(err,results)=>{
    if(!err){
      if(results.affectedRows !==0){
        res.json({type:"success" , message:"Booking Accepted Successfully"})
      }else{
        res.json({type:"error", message:"Error while Accepting the Booking"})
      }
    }else{
      res.json({errors:errors})
    }
  })
})



//@route to api/users/updateavailability
// help to Update the availability of the homeowner
router.put(`/updateavailability`,(req,res)=>{
  
  let {email,timeTo,timeFrom}=req.body;

  let statement="Update homeowner set ow_availabilityTo = ? , ow_availabilityFrom=? where ow_email=?";
console.log(email)  
  mysqlConnection.query(statement,[timeTo,timeFrom,email],(err,results)=>{
    if (!err) {
      if (results.affectedRows !== 0)
        res.json({
          type: "success",
          message: "Successfully Updated Availability"
        });
      else
        res.json({ type: "error", message: "Fail to Update Availability" });
    } else {
      res.json(err);
    }
  })

})




router.get("/evconfirmation/:token", (req, res) => {
  if (!req.params.token) return;
  try {
    const { email } = jwt.verify(req.params.token, keys.secretOrkey);
    console.log("confirmation/token", email);
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

//@route GET api/users/confirmation/:token
//@desc  Insert user route
//@access
router.get("/confirmation/:token", (req, res) => {
  try {
    const { email } = jwt.verify(req.params.token, keys.secretOrkey);
    console.log("confirmation/token", email);
    let statement =
      'UPDATE evcustomer SET ev_status = "active" WHERE ev_email=?;';
    mysqlConnection.query(statement, email, (err, results) => {
      if (!err) res.json({ success: "Email is now verified " });
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

router.get("/location", (req, res) => {
  let statement = "SELECT ow_id,ow_longitude,ow_latitude FROM homeowner";
  mysqlConnection.query(statement, (err, result) => {
    if (!err) res.json(result);
    else {
      res.json(err);
    }
  });
});
//@route Get api/users/homeowner
//@return the list of homeowner whos status is active

router.get("/homeowner", (req, res) => {
  let statement = "Select * from homeowner;";
  mysqlConnection.query(statement, "inactive", (err, results) => {
    // console.log(results)
    if (!err) res.json(results);
  });
});

router.get("/homeowner/:id", (req, res) => {
  let statement =
    "Select ow_id, ow_username,ow_address,ow_availability from homeowner where ow_id=?";
  mysqlConnection.query(statement, req.params.id, (err, results) => {
    if (!err) {
      // const data={
      //   ow_id:rows[0].ow_id,
      //   ow_username:rows[0].ow_username,
      //   ow_address:rows[0].ow_address,
      //   ow_availability:rows[0].ow_availability
      // }
      res.json(results);
    }
  });
});

router.post("/booking", (req, res) => {
  // res.json(req)
  let { owid, evid, estimatedtime, datetotravel, chargingduration } = req.body;

  let statement =
    "INSERT into booking(ow_id,ev_id,estimate_time,travel_date,duration_hour) VALUES(?,?,?,?,?);";

  mysqlConnection.query(
    statement,
    [owid, evid, estimatedtime, datetotravel, chargingduration],
    (err, results) => {
      if (!err) {
        res.json({ success: true });
      } else {
        console.log(err);
      }
    }
  );
});

router.get("/evbooking/:id", (req, res) => {
  console.log("hello its from evbooking");

  let statement =
    "select * FROM booking JOIN homeowner ON booking.`ow_id`= homeowner.`ow_id` WHERE ev_id=? ";
  mysqlConnection.query(statement, req.params.id, (err, rows) => {
    console.log("results", rows);

    res.json({ rows });
  });
});

// @route PUT api/users/
// @desc  Update user password
// @access
router.put("/password", (req, res) => {
  const { errors, isValid } = validateUpdatePassword(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let { email, oldPassword, newPassword } = req.body;
  let statement = "SELECT ev_password FROM evcustomer WHERE email=?";
  mysqlConnection.query(statement, email, (err, results) => {
    if (!err && results[0]) {
      if (!bcrypt.compareSync(oldPassword, results[0].user_password)) {
        res.json({ errors: { oldPassword: "Password incorrect" } });
      } else {
        let salt = bcrypt.genSaltSync(10);
        newPassword = bcrypt.hashSync(newPassword, salt);
        let statement = `UPDATE evcustomer SET ev_password=? WHERE email=?`;
        mysqlConnection.query(
          statement,
          [newPassword, email],
          (err, results) => {
            if (!err) {
              if (results.affectedRows !== 0)
                res.json({
                  type: "success",
                  message: "Successfully Updated Password"
                });
              else
                res.json({ type: "error", message: "Fail to Update password" });
            } else {
              res.json(err);
            }
          }
        );
      }
    }
  });
});

//@route api/users/uploadphoto
// Let upload Profile Picture

router.put("/uploadphoto", (req, res) => {
  let { email, device_photos,role } = req.body;

  if(role==="homeowner"){
    let statement = "UPDATE homeowner SET ow_image=? WHERE ow_email=?";
    mysqlConnection.query(statement, [device_photos, email], (err, results) => {
      if (!err) {
        if (results.affectedRows !== 0) {
          res.json({ type: "success", message: "Successfully Updated Image" });
        } else {
          res.json({ type: "error", message: "Fail to Update Image" });
        }
      }else res.json(err)
    });

  }else if(role==="evcustomer"){
    let statement = "UPDATE evcustomer SET ev_image=? WHERE ev_email=?";
    mysqlConnection.query(statement, [device_photos, email], (err, results) => {
      if (!err) {
        if (results.affectedRows !== 0) {
          res.json({ type: "success", message: "Successfully Updated Image" });
        } else {
          res.json({ type: "error", message: "Fail to Update Image" });
        }
      }else res.json(err)
    });
  }
 
});

router.get("/homebooking/:id", (req, res) => {
  console.log("hello this is home booking ");

  let statement =
    "SELECT * FROM booking JOIN evcustomer ON `booking`.`ev_id`=evcustomer.`ev_id` WHERE booking.`ow_id`=?;";
  mysqlConnection.query(statement, req.params.id, (err, rows) => {
    console.log("results", rows);

    res.json({ rows });
  });
});

router.get("/homeownernotify/:id", (req, res) => {
  console.log("hello this is homeownwernotift");

  let statement =
    "SELECT ev_username,travel_date FROM `booking` JOIN `evcustomer` ON `booking`.`ev_id` = `evcustomer`.`ev_id` WHERE `ow_id` = ? AND `booking_status` = ?;";

  mysqlConnection.query(statement, [req.params.id, "nothing"], (err, rows) => {
    console.log("results", rows);
    if (!err) res.json({ rows });
  });
});

router.get("/test", (req, res) => res.json({ hello: "hi" }));

module.exports = router;
