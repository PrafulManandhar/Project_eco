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

  let statement = "SELECT * FROM evcustomer WHERE ev_email=? && ev_status=?";

  let { email, password } = req.body;
  mysqlConnection.query(statement, [email,"active"], (err, rows) => {
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
      res.json({ success:false });
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

  let statement = "SELECT * FROM homeowner WHERE ow_email=? && ow_userstatus=?;";

  let { email, password } = req.body;
  console.log("email n  ",email)
  mysqlConnection.query(statement, [email,"active"], (err, rows) => {
    console.log("rows inside homelogin",rows)
    if (!err && rows[0]) {

      if (bcrypt.compare(password, rows[0].ow_password)) {
        //"Authorized"
        //0 is Active 1 is Inactive

        let statement2 =
          "UPDATE homeowner SET ow_userstatus=? WHERE ow_email=? ;";
        mysqlConnection.query(statement2, ["online", email], (err, results) => {
          if (!err) {
            const payload = {
              email: rows[0].ow_email
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
      res.json({ successssss:false });
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
         
          (err,token) => {
            if(!err){
              console.log("token", token)
              // mailOption.to = `${email}`;
              mailOption.html = `Hello,${username}!<br>Please Click on the link to verify your email.<a style="color:red" href="http://localhost:5000/api/users/evconfirmation/${token}/">Click here to verify</a>`;
              transporter.sendMail(mailOption, (err, info) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log({
                    success: "This is sending email",
                    
                  });
                  console.log("token",token)
                }
              });
            }else{
              console.log("err",err)
            }
            
          }
        );
        res.json({ success: true });
      } else {
        res.json({success:false});
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
          email:email
        };
        jwt.sign(
          payload,
          keys.secretOrkey,
         
          (err,token) => {
            if(!err){
              console.log("token", token)
              // mailOption.to = `${email}`;
              mailOption.html = `Hello,${username}!<br>Please Click on the link to verify your email.<a style="color:red" href="http://localhost:5000/api/users/confirmation/${token}/">Click here to verify</a>`;
              transporter.sendMail(mailOption, (err, info) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log({
                    success: "This is sending email",
                    
                  });
                  console.log("token",token)
                }
              });
            }else{
              console.log("err",err)
            }
            
          }
        );
        res.json({ success: true });
      } else {
        res.json({success:false});
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
  
    //@route GET api/users/current
//@desc  Return current user
//@access Private
router.get("/homeownerdashboard",
passport.authenticate("jwt", { session: false }),
(req, res) => {
  res.json(req.user)
});
     
    router.get("/homeownerdashboard",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.json(req.user)
    });

   //@route GET api/users/confirmation/:token
//@desc  Insert user route
//@access
router.get("/confirmation/:token", (req, res) => {
  if(!req.params.token) return;
  try {
    const { email } = jwt.verify(req.params.token, keys.secretOrkey);
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

router.get("/evconfirmation/:token",(req,res)=>{
  if(!req.params.token) return;
  try {
    const { email } = jwt.verify(req.params.token, keys.secretOrkey);
    console.log("confirmation/token",email);
    let statement =
      'UPDATE evcustomer SET ev_userstatus = "active" WHERE ev_email=?;';
    mysqlConnection.query(statement, email, (err, results) => {
      if (!err) res.json({ success: "Email is now verified" });
      else {
        res.json({ err });
      }
    });
  } catch (e) {
    res.json(e);
  }
})

  //@route GET api/users/confirmation/:token
//@desc  Insert user route
//@access
router.get("/confirmation/:token", (req, res) => {
  try {
    const { email } = jwt.verify(req.params.token, keys.secretOrkey);
    console.log("confirmation/token",email);
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

    router.get("/location",(req,res)=>{
      let statement = "SELECT ow_id,ow_longitude,ow_latitude FROM homeowner";
      mysqlConnection.query(statement,(err,result)=>{
        if(!err)
      res.json(result)  
      else {
        res.json(err)
      }  
  })
    })
//@route Get api/users/homeowner
//@return the list of homeowner whos status is active

router.get('/homeowner',(req,res)=>{
  let statement = "Select * from homeowner;"
  mysqlConnection.query(statement,"inactive",(err,results)=>{
    // console.log(results)
    if(!err) res.json(results);
    
  })
})

router.get('/homeowner/:id',(req,res)=>{
  let statement="Select ow_id, ow_username,ow_address,ow_availability from homeowner where ow_id=?";
  mysqlConnection.query(statement,req.params.id,(err,results)=>{
    if(!err){
      // const data={
      //   ow_id:rows[0].ow_id,
      //   ow_username:rows[0].ow_username,
      //   ow_address:rows[0].ow_address,
      //   ow_availability:rows[0].ow_availability
      // }
      res.json(results)
    }
  })
})

router.post('/booking',(req,res)=>{
  // res.json(req)
  let {
    owid,
    evid,
    estimatedtime,
    datetotravel,
    chargingduration
  } = req.body;

  let statement="INSERT into booking(ow_id,ev_id,estimate_time,travel_date,duration_hour) VALUES(?,?,?,?,?);"

  mysqlConnection.query(statement,[owid,evid,estimatedtime,datetotravel,chargingduration],(err,results)=>{
      if(!err){
        res.json({success:true})
      }else{
        console.log(err)
      }
  })
})

router.get("/evbooking/:id",(req,res)=>{
  console.log("hello")
  let data=[]
  // let statement ="SELECT booking_status,ow_username,ow_mobile,ow_email,ow_address,ow_registration_date,duration_hour,ow_image,ow_availability,travel_date FROM booking JOIN homeowner ON booking.`ow_id`= homeowner.`ow_id` WHERE ev_id=?"

  let statement ="select * FROM booking JOIN homeowner ON booking.`ow_id`= homeowner.`ow_id` WHERE ev_id=? "
  mysqlConnection.query(statement,req.params.id,(err,rows)=>{
    console.log("results",rows)
   
    res.json({rows})
  })

})


router.get("/homeownernotify/:id",(req,res)=>{
  console.log("hello this is homeownwernotift")
 

  let statement ="SELECT ev_username,travel_date FROM `booking` JOIN `evcustomer` ON `booking`.`ev_id` = `evcustomer`.`ev_id` WHERE `ow_id` = ? AND `booking_status` = ?;";
  
  mysqlConnection.query(statement,[req.params.id,"nothing"],(err,rows)=>{
    console.log("results",rows)
   if(!err)
    res.json({rows})
  })

})

    // if(!err){
    //   let i=0;
    //   for (i=0;i<rows.length;i++){
    //     console.log("inside for loop")
    //     console.log("rows",rows[i])
      
    //     let statement2 ="select * from booking where bo_id=?"
    //     mysqlConnection.query(statement2,rows[i].bo_id,(err,results)=>{
    //       // console.log("results",results)
    //       for(let j=0;j<results.length;j++){
    //         console.log("results",results[j].ow_id)
    //         console.log("rows",rows[j])
    //       }
    //     //   let statement3 ="select * from homeowner where ow_id=?"
    //     //   mysqlConnection.query(statement3,results[i].ow_id,(err,secondresult)=>{
    //     //     if(!err){
    //     //       console.log("secondResult",secondresult[1][i])
    //     //     }
    //     //   })
    //     //   // console.log("result",results[1][i])
    //     //   // data.push({
    //     //   //   bookingdetail:rows[i].travel_date
    //     //   // })

        
          
    //     })
        
      
      
//     }else{
//       console.log("evbooking error",err)
//     }
//   })
// res.json({hi:"helo"})})


router.get("/test",(req,res)=>res.json({hello:"hi"}));

module.exports=router;
