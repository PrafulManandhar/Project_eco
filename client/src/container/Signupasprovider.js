import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Image from "../ImageSliderImages/signuppageimage.jpg";
import axios from "axios";
// import FormValidationRegister from '../Validator/FormValidationRegister';

import Money from '../logo/cash.png'

export default class signupasprovider extends Component {
// state={
//   longitude:"",
//   latitude:""
// }
//   // longitude": "85.3123",
//   // "latitude": "27.6744",
//   componentDidMount = async () => {
//     await axios
//       .get("https://json.geoiplookup.io/")
//       .then(response => this.setState({ longitude:response.data.longitude,latitude:response.data.latitude}),
// )
//       .catch(err => console.log(err));
    

//   };

//   register = async e => {
//     e.preventDefault();
//     const data = {
//       username: e.target.username.value,
//       password: e.target.password.value,
//       // confirmpassword: e.target.confirmpassword.value,
//       email: e.target.email.value,
//       mobile: e.target.mobile.value,
//       address :e.target.address.value,
//       longitude:this.state.longitude,
//       latitude:this.state.latitude
// };
// console.log("data.latitude",data.latitude)
// console.log("data.longitude",data.longitute)

//     const { errors, isValid } = FormValidationRegister(data);
//     if (isValid) {
//       console.log("data.longitude isvalid",data.longitute)

//      axios.post("http://localhost:5000/api/users/signupasprovider", data).then(res=>{
//        console.log(res)
//        if(res.data.success){
//                this.props.history.replace("/confirmation");
//        }
//       }).catch(err=>console.log({err}));
//      // console.log(resp.promise.promisevalue.data.success)
//      //  if(resp.data.success){
//      //   this.props.history.replace("/confirmation");
//      //  }
//      } else {
//        console.log(errors);
//      }
//    };

  render() {
    return (
      <div>
        <div class="signupprovider-image">
          <div class="overlay">
            <div class="signup-discription-area">
              <div class="name">E-HUB</div>
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
              
                {/* <div class="have-an-account">
                <Link to="/login" class="hover">
                {" "}ALREADY HAVE AN ACCOUNT
                </Link></div>
              
              <div>Create a New Account</div>
              <form onSubmit={this.register}>
             
                <div >
                  <input
                    type="text"
                    placeholder="UserName"
                    name="username"
                  />
                </div>
             
              <div >
                <input
                  type="email"
                  name="email"
                  placeholder="Email : name@example.com"
                />
              </div>
            
              <div class="signup-input-area">
                <input type="number" name="mobile" placeholder="mobile" />
              </div>
              <div class="signup-input-area">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div class="signup-input-area">
                <input type="text" name="address" placeholder="Address" />
              </div>
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
               */}
               
            </div>
          </div>
          <div class="signuppageimage">
            <img src={Image} style={{ height: "90vh", width: "100%" }} />
          </div>
        </div>
        <div className="cards">
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
        </div>
      </div>
    );
  }
}
