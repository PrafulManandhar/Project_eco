import React, { Component } from "react";
import Navbar from "./Navbar";
import Img from "../../ImageSliderImages/user.png";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FormGroup, FormControl, Form, Col, Alert,Button } from "react-bootstrap";


import {
  loginusersdata,
  logoutusersdata
} from "../../Action/loginUserDataAction";
import { login } from "../../Action/loginAction";
import axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../../Utility/setauth";

class MyProfile extends Component {
  state = {
    device_photos: "",
    email: "",
    role: "",
    username: "",
    mobile: "",
    address: "",
    image: "",
    message: "",
    show: false,
    registration_data: ""
  };

  componentDidMount = async () => {
    await this.setState({
      role: this.props.MyInfo.userInfo.role,
      username: this.props.MyInfo.userInfo.username,
      email: this.props.MyInfo.userInfo.email,
      mobile: this.props.MyInfo.userInfo.mobile,
      address: this.props.MyInfo.userInfo.address,
      image: this.props.MyInfo.userInfo.image,
      registration_data: this.props.MyInfo.userInfo.registration_data,
      zone:this.props.MyInfo.userInfo.zone,
      district:this.props.MyInfo.userInfo.district
    });
    console.log(this.state);
    if (!this.state.address) {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
        const decode = jwt_decode(localStorage.token);
        this.props.loginusersdata(decode);

        this.props.login();

        await axios
          .get("http://localhost:5000/api/users/homeownerdashboard")
          .then(res => {
            console.log("Login user information", res.data);
            this.props.loginusersdata(res.data);
            console.log("Login User info", this.props.MyInfo);
          });
        this.setState({
          role: this.props.MyInfo.userInfo.role,
          username: this.props.MyInfo.userInfo.username,
          email: this.props.MyInfo.userInfo.email,
          mobile: this.props.MyInfo.userInfo.mobile,
          address: this.props.MyInfo.userInfo.address,
          image: this.props.MyInfo.userInfo.image,
          registration_data: this.props.MyInfo.userInfo.registration_data,
          zone: this.props.MyInfo.userInfo.zone,
          district: this.props.MyInfo.userInfo.district
        });
      }
    }
  };

  handlePhotos = event => {
    event.preventDefault();
    let files = event.target.files;

    if (files && files.length > 0) {
      this.setState({ device_photos: files[0].name }, () =>
        console.log(this.state.device_photos)
      );
    } else console.log("no files selected");
  };

  upload = async() => {
   await axios
      .put("http://localhost:5000/api/users/uploadphoto", this.state)
      .then(res => {
        console.log("Resp is ", res.data);
        if (res.data.errors) {
          this.setState({ errors: res.data.errors }, () =>
            console.log("This state after setting error", res.data.errors)
          );
        } else if (res.data.type === "success") {
          this.setState({ message: res.data.message }, () => this.showAlerts());
        } else if (res.data.type === "error") {
          this.setState({ message: res.data.message }, () => this.showAlerts());
        }
      })

      .catch(err => console.log("ERROR", err));
  };

  showAlerts = () => {
    this.setState({ show: true }, () => {
      setTimeout(() => {
        this.setState({ show: false });
      }, 1000);
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <body>
          <div class="ower-profiler-page">
            <div class="ower-profiler-holder">
              <div class="container">
                <div class="ower-profile-section">
                  <div class="row">
                    <div class="col-sm-3 col-3">
                      <div class=" ower-profile--left">
                        <div class="profile-img-holder">
                        {(this.props.MyInfo.userInfo.image)? <img
                            src={require(`../../profilePhoto/${
                              this.props.MyInfo.userInfo.image
                            }`)}
                            alt=""
                          />: <img
                          src={require(`../../profilePhoto/noimage.jpg`)}
                          alt="no Uploaded Photo"
                        />}
                        </div>
                        <div class="ower-profile--info">
                          <h3>{this.state.username}</h3>
                          <a href="#" class="email">
                            {this.state.email}
                          </a>
                          <span class="phone">{this.state.mobile}</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-9">
                      <div class="ower-profile--right">
                        <div class="ower-profile--basicInfo">
                          <div class="basicInfo-item">
                            <h4>About Me</h4>
                            <ul>
                              <li>
                                <p>I am Teacher</p>
                                <p>I promote EV cars and bike</p>
                              </li>
                            </ul>
                          </div>
                          <div class="basicInfo-item">
                          <h4>Basic Information</h4>
                            <ul>
                              <li>
                                <span class="bi-label">Address:</span>
                                <span class="bi-value">
                                  {this.state.address}
                                </span>
                              </li>
                              <li>
                                <span class="bi-label">Zone:</span>
                                <span class="bi-value">{this.state.zone}</span>
                              </li>
                              <li>
                                <span class="bi-label">District:</span>
                                <span class="bi-value">{this.state.district}</span>
                              </li>
                              <li>
                                <span class="bi-label">Mobile no:</span>
                                <span class="bi-value">
                                  {this.state.mobile}
                                </span>
                              </li>
                              <li>
                                <span class="bi-label">Register date:</span>
                                <span class="bi-value">
                                  {this.state.registration_data}
                                </span>
                              </li>
                            </ul>
                          </div>
                          <NavLink to="/editpassword" class="blue-btn">
                            Edit profile
                          </NavLink>
                          <span style={{ marginLeft: "50px" }}>
                            <FormGroup>
                              <Form.Label>
                                Upload Profile Photo
                              </Form.Label>
                              <FormControl
                                name="images[]"
                                type="file"
                                onChange={this.handlePhotos}
                              />
                            </FormGroup>
                            
                          </span>
                          <Button onClick={this.upload}>Upload</Button>
                          <Alert show={this.state.show} >{this.state.message}</Alert>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  MyInfo: state.userdata
});
const mapActionToProps = dispatch => ({
  loginusersdata: payload => dispatch(loginusersdata(payload)),
  login: () => dispatch(login())
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(MyProfile);
