import React, { Component } from "react";
import Navbar from "./Navbar";
import Img from "../../ImageSliderImages/user.png";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FormGroup, FormControl, Form,Col, Alert } from "react-bootstrap";
import { Button } from "@material-ui/core";
import Axios from "axios";

class MyProfile extends Component {
  state = {
    device_photos: "",
    email: this.props.MyProfile.userInfo.email,
    role:this.props.MyProfile.userInfo.role
  };

  handlePhotos = event => {
    event.preventDefault();
    let files = event.target.files;

    if (files && files.length > 0) {
      this.setState({ device_photos: files[0].name },()=>console.log(this.state.device_photos));
    } else console.log("no files selected");
  };

  upload = () => {
    Axios.put("http://localhost:5000/api/users/uploadphoto", this.state)
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

  showAlert = () => {
    this.setState({ show: true }, () => {
      setTimeout(() => {
        this.setState({ show: false });
      }, 2000);
    });
  };


  showAlerts =()=>{
    this.setState({show:true},()=>{
      setTimeout(()=>{this.setState({show:false})},3000)
    })
  }

  render() {
    console.log(this.props.MyProfile.userInfo);
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
                          <img src={require(`../../profilePhoto/${this.props.MyProfile.userInfo.image}`)} alt="" />
                        </div>
                        <div class="ower-profile--info">
                          <h3>{this.props.MyProfile.userInfo.username}</h3>
                          <a href="#" class="email">
                            {this.props.MyProfile.userInfo.email}
                          </a>
                          <span class="phone">
                            {this.props.MyProfile.userInfo.mobile}
                          </span>
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
                                <p>
                              I am Teacher
                                </p>
                                <p>
                                 I promote EV cars and bike
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div class="basicInfo-item">
                            <h4>Basic Information</h4>
                            <ul>
                              <li>
                                <span class="bi-label">Address:</span>
                                <span class="bi-value">
                                  {this.props.MyProfile.userInfo.address}
                                </span>
                              </li>
                              <li>
                                <span class="bi-label">Zone:</span>
                                <span class="bi-value">Kathmandu</span>
                              </li>
                              <li>
                                <span class="bi-label">District:</span>
                                <span class="bi-value">kathmandu</span>
                              </li>
                              <li>
                                <span class="bi-label">Mobile no:</span>
                                <span class="bi-value">
                                  {this.props.MyProfile.userInfo.mobile}
                                </span>
                              </li>
                              <li>
                                <span class="bi-label">Register date:</span>
                                <span class="bi-value">
                                  {
                                    this.props.MyProfile.userInfo
                                      .registration_data
                                  }
                                </span>
                              </li>
                            </ul>
                          </div>
                          <NavLink to="/editpassword" class="blue-btn">
                            Edit profile
                          </NavLink>
                          <span style={{ marginLeft: "50px" }}>
                            <FormGroup>
                              <Form.Label>Upload Profile Photo</Form.Label>{" "}
                              <FormControl
                                name="images[]"
                                type="file"
                                onChange={this.handlePhotos}
                              />
                              <Button onClick={this.upload}>Upload</Button>
                            </FormGroup>
                          </span>
                        </div>
                        <Col>
                        <Alert show={this.state.show}>
                          {this.state.message}
                        </Alert>
                      </Col>
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
  MyProfile: state.userdata
});

export default connect(mapStateToProps)(MyProfile);
