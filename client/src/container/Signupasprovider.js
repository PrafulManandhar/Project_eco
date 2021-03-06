import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import Image from "../ImageSliderImages/signuppageimage.jpg";
import axios from "axios";
import FormValidationRegister from '../Validator/FormValidationRegister';

import Money from '../logo/cash.png'
import Card from "./Card";

export default class signupasprovider extends Component {
state={
  longitude:"",
  latitude:""
}
//   // longitude": "85.3123",
//   // "latitude": "27.6744",
  componentDidMount = async () => {
    await axios
      .get("https://json.geoiplookup.io/")
      .then(response => this.setState({ longitude:response.data.longitude,latitude:response.data.latitude}),
)
      .catch(err => console.log(err));
    

  };

  register = async e => {
    e.preventDefault();
    console.log(e.target.username.value)
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      // confirmpassword: e.target.confirmpassword.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      address :e.target.address.value,
      longitude:this.state.longitude,
      zone:e.target.zone.value,
      district:e.target.district.value,
      latitude:this.state.latitude
};
console.log("data.latitude",data.latitude)
console.log("data.longitude",data.longitute)

const { errors, isValid } = FormValidationRegister(data);
if (isValid) {
  axios.post("http://localhost:5000/api/users/signupasprovider", data).then(res=>{
    if(res.data.success){
      this.props.history.replace("/useradded")
    }
  }).catch(err=>console.log(err));
} else {
  console.log(errors);
}
};
  render() {
    return (
      <div>
        <div class="signupprovider-image">
          <div class="overlay">
            <div class="signup-discription-area">
            <NavLink to="/">
                <div class="name">E-HUB</div>
              </NavLink>
              <div class="short-discription-area">
                E-HUB needs partners
                <br />
                like you.
              </div>
              <div class="discription-area">
                Give with Ehub and earn great money as an independent
                contractor. Get paid weekly just for helping our community to
                promote EV vechiles . Be your own boss and get paid in fares for
                servicing on your own schedule.
              </div>
            </div>
            
            <div class="signup-form-area">
              
                <div class="have-an-account">
                <NavLink to="/login" class="hover">
                {" "}ALREADY HAVE AN ACCOUNT
                </NavLink></div>
              
              <div>Create a New Account</div>
              <form onSubmit={this.register}>
             
              <input type="text" class="form-control" name="username" placeholder="Username"/> 
                <input type="email" class="form-control" name="email" placeholder="name@example.com"/>
                 {!this.state.error?'':"you have already sign up"}
                <input type="number" class="form-control" name="mobile" placeholder="Mobile"/>
                <input type="type" class="form-control" name="address" placeholder="Address"/>
                <input type="password" class="form-control" name="password" placeholder="Password"/>
                <input type="type" class="form-control" name="zone" placeholder="Zone"/>

                <input type="type" class="form-control" name="district" placeholder="District"/>
              <div class="term">
                  
                By proceeding, I agree to Uber's Terms of Use and acknowledge
                that I have read the Privacy Policy.
              </div>
              <div class="term">
                I also agree that Uber or its representatives may contact me by
                email, phone, or SMS (including by automated means) at the email
                address or number I provide, including for marketing purposes.
              </div>
              <button type="submit" >Signup</button>
              </form>
              
               
            </div>
          </div>
          <div class="signuppageimage">
            <img src={Image} style={{ height: "90vh", width: "100%" }} />
          </div>
        </div>
        <div className="cards">
          {/* <div className="card">
            <img src={Money} className="signup-image"/>
            <div className="short-discription-area">
              Make a good money
            </div>
            <div className="discription-area">
            Got a house? Turn it into a money machine. The city is buzzing and ehub makes it easy for you to cash in on the action. Plus, you've already got everything you need to get started.
            </div>
          </div>
          <div className="card">
            <img src={Money} className="signup-image"/>
            <div className="short-discription-area">
              Make a good money
            </div>
            <div className="discription-area">
            Got a house? Turn it into a money machine. The city is buzzing and ehub makes it easy for you to cash in on the action. Plus, you've already got everything you need to get started.
            </div>
          </div>
          <div className="card">
            <img src={Money} className="signup-image"/>
            <div className="short-discription-area">
              Make a good money
            </div>
            <div className="discription-area">
            Got a house? Turn it into a money machine. The city is buzzing and ehub makes it easy for you to cash in on the action. Plus, you've already got everything you need to get started.
            </div>
          </div> */}
          <Card/>
        </div>
      </div>
    );
  }
}
