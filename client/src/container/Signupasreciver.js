import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Image from "../ImageSliderImages/signuppageimage.jpg";
import axios from "axios";
import FormValidationRegister from "../Validator/FormValidationRegister";

import Money from "../logo/cash.png";

export default class Signupasreciver extends Component {
  state={
    error:false
  }
  register = async e => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      // confirmpassword: e.target.confirmpassword.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      address: e.target.address.value
    };
    const { errors, isValid } = FormValidationRegister(data);
    if (isValid) {
      axios.post("http://localhost:5000/api/users/signupasreciver", data).then(res=>{
        if(res.data.success){
          this.props.history.replace("/useradded")
        }else{
          this.setState({error:true})
        }
      });
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
                E-HUB here to make easy for your destination
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
                  {" "}
                  ALREADY HAVE AN ACCOUNT
                </NavLink>
              </div>

              <div>Create a New Account</div>
              <form onSubmit={this.register}>
                
                <input type="text" class="form-control" name="username" placeholder="Username"/> 
                <input type="email" class="form-control" name="email" placeholder="name@example.com"/>
                 {!this.state.error?'':"you have already sign up"}
                <input type="number" class="form-control" name="mobile" placeholder="Mobile"/>
                <input type="text" class="form-control" name="address" placeholder="Address"/>
                <input type="password" class="form-control" name="password" placeholder="Password"/>
                
                <div class="term">
                  By proceeding, I agree to Uber's Terms of Use and acknowledge
                  that I have read the Privacy Policy.
                </div>
                <div class="term">
                  I also agree that Uber or its representatives may contact me
                  by email, phone, or SMS (including by automated means) at the
                  email address or number I provide, including for marketing
                  purposes.
                </div>
                <button type="submit">Signup</button>
              </form>
            </div>
          </div>
          <div class="signuppageimage">
            <img src={Image} style={{ height: "90vh", width: "100%" }} />
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img src={Money} className="signup-image" />
            <div className="short-discription-area">Make a good money</div>
            <div className="discription-area">
              Got a house? Turn it into a money machine. The city is buzzing and
              ehub makes it easy for you to cash in on the action. Plus, you've
              already got everything you need to get started.
            </div>
          </div>
          <div className="card">
            <img src={Money} className="signup-image" />
            <div className="short-discription-area">Make a good money</div>
            <div className="discription-area">
              Got a house? Turn it into a money machine. The city is buzzing and
              ehub makes it easy for you to cash in on the action. Plus, you've
              already got everything you need to get started.
            </div>
          </div>
          <div className="card">
            <img src={Money} className="signup-image" />
            <div className="short-discription-area">Make a good money</div>
            <div className="discription-area">
              Got a house? Turn it into a money machine. The city is buzzing and
              ehub makes it easy for you to cash in on the action. Plus, you've
              already got everything you need to get started.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
