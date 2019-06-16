const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mysql = require("mysql");
const databaseOptions = require("./database");
const mysqlConnection = mysql.createConnection(databaseOptions);
const keys = require("./keys");
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrkey;
mysqlConnection.connect(err => {
  if (err) console.log(err);
});
module.exports = passport => {
  console.log("Inside Passport strateg");
  passport.use(
    new JwtStrategy(options, (jwt_payload, next) => {
      console.log(jwt_payload);
      mysqlConnection.query(
        "select Role from homeowner where ow_id=?",
        jwt_payload.email,
        (err, rows) => {
          if (rows[0].Role === "homeowner") {
            mysqlConnection.query(
              "select * homeowner where ow_id=?",
              jwt_payload.email,
              (err, results) => {
                if (!err) {
                  let user = {
                    id: results[0].ow_id,
                    email: results[0].ow_email,
                    image: results[0].ow_image,
                    username: results[0].ow_username,
                    mobile: results[0].ow_mobile,
                    registration_data: results[0].ow_registration_date,
                    status: results[0].ow_status,
                    address: results[0].ow_address
                  };
                  return next(null, user);
                }
              }
            );
          }
          else if(rows[0].Role === "evcustomer"){
            m
          }
        }
      );
      mysqlConnection.query(
        "SELECT * FROM evcustomer where ev_email=?",
        jwt_payload.email,
        (err, rows) => {
          if (!err) {
            let user = {
              id: rows[0].ev_id,
              email: rows[0].ev_email,
              image: rows[0].ev_image,
              username: rows[0].ev_username,
              mobile: rows[0].ev_mobile,
              registration_data: rows[0].ev_registration_date,
              status: rows[0].ev_status,
              address: rows[0].ev_address
            };
            return next(null, user);
          } else return next(null, false);
        }
      );
    })
  );
};
