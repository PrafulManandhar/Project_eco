const Validator = require('validator');
const isEmpty =require('./isEmpty');
module.exports = function validateAddUser(data) {
  let errors ={};
  console.log(data)
  //Soemthing needs to be passed
  data.username=!isEmpty(data.username)?data.username:'';
  data.password=!isEmpty(data.password)?data.password:'';
  data.email=!isEmpty(data.email)?data.email:'';
  data.mobile=!isEmpty(data.mobile)?data.mobile:'';
  data.address=!isEmpty(data.address)?data.address:'';
  
  if(!Validator.isLength(data.username,{min:2,max:30}))
  errors.username="username must be between 2 and 30 characters!";

  if(Validator.isEmpty(data.email))
  errors.email="Email is required!"; 

  if(Validator.isEmpty(data.address))
  errors.address="Address is required!";

  if(Validator.isEmpty(data.mobile))
  errors.mobile="mobile no is required!";

  if(Validator.isEmpty(data.username))
  errors.username="username is required!";

  if(Validator.isEmpty(data.password))
  errors.password="Password is required!";
 

  if(!Validator.isLength(data.password,{min:6,max:30}))
  errors.password="Password must be atleast 6 characters!";

  return{
    errors,
    isValid:isEmpty(errors)
  }
}