import React, { Component } from "react";
import Navbar from './Navbar';
import ImageSlider from './ImageSlider';
import ServiceCard from './ServiceCard';
// import CarCard from './container/CarCard';
export default class MainDashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageSlider />
        <div style={{ marginTop: "60px" }}>
          <ServiceCard />
        </div>
      </div>
    );
  }
}
