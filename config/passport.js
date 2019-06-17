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

      if(jwt_payload.role==="homeowner"){
        mysqlConnection.query(
          "select * from homeowner where ow_email=?",
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
                address: results[0].ow_address,
                role:results[0].Role
              };
              return next(null, user);
            }
            else
            return next(null,false)
          }
        );

      }else{
        mysqlConnection.query(
          "SELECT * FROM evcustomer WHERE ev_email=?",
          jwt_payload.email,
          (err, results) => {
            if (!err) {
              let user = {
                id: results[0].ev_id,
                email: results[0].ev_email,
                image: results[0].ev_image,
                username: results[0].ev_username,
                mobile: results[0].ev_mobile,
                registration_data: results[0].ev_registration_date,
                status: results[0].ev_status,
                address: results[0].ev_address,
                role:results[0].Role

              };
              return next(null, user);
            }
            else
            return next(null,false)
          }
        );
      }
    })
  )
}
