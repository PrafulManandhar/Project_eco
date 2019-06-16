import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { connect } from "react-redux";
import {Container,Col,Row} from 'react-bootstrap'
import { loginusersdata,logoutusersdata} from "../../Action/loginUserDataAction";
import jwt_decode from "jwt-decode";
import { login } from "../../Action/loginAction";
import {loginbookingdata} from '../../Action/bookingAction'

import setAuthToken from "../../Utility/setauth";
import { constants } from "zlib";

class HomeOwnerDashboard extends Component {
  componentWillMount = async() => {
    await axios
      .get("http://localhost:5000/api/users/homeownerdashboard")
      .then(res => {
        console.log("Login user information", res.data);
        this.props.loginusersdata(res.data);
        console.log("Login User info", this.props.UserInfo.userInfo.id);
      })
      .catch(err => console.error(err));

      axios.get(`http://localhost:5000/api/users/homeownernotify/${this.props.UserInfo.userInfo.id}`).then(res=>{this.props.loginbookingdata(res.data)
    console.log(this.props.bookingdata)}).catch(err=>console.error(err))

    console.log("this.props.bookingdata",this.props.bookingdata)

    if (localStorage.token) {
      setAuthToken(localStorage.token);
      const decode = jwt_decode(localStorage.token);
      this.props.loginusersdata(decode);
      this.props.login();

      axios
        .get("http://localhost:5000/api/users/homeownerdashboard")
        .then(res => {
          console.log("Login user information", res.data);
          this.props.loginusersdata(res.data);
          console.log("Login User info", this.props.UserInfo);
        });
    }
  };

  render() {
    return (<Container fluid>
      <Row>
        <Col md="12">
        <Navbar/>
        
        </Col>
      </Row>
    </Container>);
  }
}

const mapActionToProps = dispatch => ({
  loginusersdata: payload => dispatch(loginusersdata(payload)),
  login:()=>dispatch(login()),
  loginbookingdata:(payload)=>dispatch(loginbookingdata(payload))
});

const mapStateToProps = state => ({
  UserInfo: state.userdata,
  bookingdata:state.bookingdata
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(HomeOwnerDashboard);