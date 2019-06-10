import React, { Component } from "react";
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import ServiceCard from './ServiceCard';
import TeamInfo from "./TeamInfo";
import Signupinmain from "./Signupinmain.1";
import Footer from "./Footer";
// import CarCard from './container/CarCard';
export default class MainDashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageSlider />
        {/* <div style={{marginTop:"20%"}}><TeamInfo/></div> */}
        <Signupinmain/>
        <div style={{ marginTop: "60px" }}>
          <ServiceCard />
        </div>
        <div style={{ marginTop: "1px" }}>
          <Footer/>
        </div>
      </div>
    );
  }
}
