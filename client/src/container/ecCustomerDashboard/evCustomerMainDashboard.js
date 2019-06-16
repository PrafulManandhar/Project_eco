import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { connect } from "react-redux";
import { position } from "../../Action/dataAction";
import { loginusersdata } from "../../Action/loginUserDataAction";
import jwt_decode from "jwt-decode";
import { login } from "../../Action/loginAction";
import Map from "./Map";
import { Container, Row, Col } from "react-bootstrap";
import HomeownerTable from "./HomeownerTable";
import {loginbookingdata} from '../../Action/bookingAction'

import setAuthToken from "../../Utility/setauth";
class evCustomerMainDashboard extends Component {
  componentWillMount = () => {
    axios.get("http://localhost:5000/api/users/dashboard").then(res => {
      console.log("Login user information", res.data);
      this.props.loginusersdata(res.data);
      console.log("Login User info", this.props.UserInfo);
    });
    axios.get("http://localhost:5000/api/users/location").then(res => {
      console.log("longitude and latitude", res.data);
      this.props.position(res.data);
      console.log("Data Reducer", this.props.Data.data[0]);
    });

    if (localStorage.token) {
      setAuthToken(localStorage.token);
      const decode = jwt_decode(localStorage.token);
      this.props.loginusersdata(decode);
      this.props.login();

      axios.get("http://localhost:5000/api/users/dashboard").then(res => {
        console.log("Login user information", res.data);
        this.props.loginusersdata(res.data);
        console.log("Login User info", this.props.UserInfo);
      });
    }
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="12">
            <Navbar />
          </Col>
          <Col md={{ span: 10, offset: 1 }}>
            <Map />
          </Col>
          <Col md={{ span: 10, offset: 1 }}>
            <HomeownerTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapActionToProps = dispatch => ({
  loginusersdata: payload => dispatch(loginusersdata(payload)),
  position: payload => dispatch(position(payload)),
  login: () => dispatch(login()),
  loginbookingdata: payload => dispatch(loginbookingdata(payload))
});

const mapStateToProps = state => ({
  UserInfo: state.userdata,
  Data: state.locationdata,
  bookingdata: state.bookingdata
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(evCustomerMainDashboard);
