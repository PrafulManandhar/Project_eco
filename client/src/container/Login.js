import React, { Component } from "react";
import Img from "../logo/abc.jpg";
// import Banner from "./Banner";
import Navbar from "./Navbar";
// import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Axios from "axios";
import LoginValidation from "../Validator/LoginValidation";
import { login } from "../Action/loginAction";
import { loginusersdata } from "../Action/loginUserDataAction";
import jwt_decode from "jwt-decode";
import setAuthToken from "../Utility/setauth";

class Login extends Component {

  login = async e => {
    e.preventDefault();
    console.log(e.target.email.value)
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    console.log(data)
    const { errors, isValid } = LoginValidation(data);
    if (isValid) {
      const resp = await Axios.post(
        "http://localhost:5000/api/users/login",
        data
      ).then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        // console.log(res.data.data)
        setAuthToken(res.data.token);
        const decode = jwt_decode(res.data.token);
        this.props.loginusersdata(decode);
        // console.log(res.data.success);
        if (res.data.success) {
          this.props.login();
          this.props.history.replace("/evdashboardmain");
        }
      });
    } else {
      console.log("Invalid username password");
    }
  };
  render() {
    return (
      <div>
        {/* <Banner /> */}
        <Navbar />
        <section>
          <div class="login-box">
            <div class="form-area">
              <div class="welcome-text">Welcome to</div>
              <div class="infinity">ECO charge hub</div>
              <div class="login-description">
                Login. We Promote Eco Vechiles
              </div>
              <form onSubmit={this.login} >
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  class="input-box"
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  class="input-box"
                />

                <div class="button">
                  <button
                  
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div class="dont">
                Don't have an accout?
                <span class="green">
                  <NavLink to="/signup" className="navbar-button">
                    Just Sign up
                  </NavLink>
                </span>
              </div>
            </div>
            <div class="image-area">
              <img src={Img} class="image" />
              <div class="image-text">
                <div class="icon" />
                <div class="logo">eco charge hub</div>
                <div class="description">
                  Keep green and keep our planet clean. Dont be mean and go
                  green.
                </div>
              </div>
            </div>
          </div>
          {/* <div class="circle circle2"></div>
    <div class="circle circle1"></div> */}
        </section>
      </div>
    );
  }
}

const mapActionToProps = dispatch => ({
  login: () => dispatch(login()),
  loginusersdata: payload => dispatch(loginusersdata(payload))
});

const mapStateToProps = state => ({
  loginData: state.login
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);
