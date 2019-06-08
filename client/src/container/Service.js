import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Service extends Component {
  render() {
    return (
      <div>

  <Navbar/>
<div class="top-banner">
  <div class="top-banner--text">
    <h3>Charge your EV vehicle, Get ready to set off</h3>
    <p>ECO CHARGE HUB helps you to locate the service provider and pinpoint the hub for you to charge your EV vehicle
      from. You can trust our system for finding the hub anytime anywhere within Nepal.</p>
  </div>
</div>

<div class="service-steps">
  <div class="container">
    <div class="row">
      <div class="servicebox col-sm">
        <h4 style={{fontfamily: "Raleway, sans-serif"}}>Step 1</h4>
        <p style={{fontfamily: "Noto Sans KR, sans-serif"}}>Search Charge Hub Area</p>
      </div>
      <div class="servicebox col-sm">
        <h4 style={{fontfamily: "Raleway, sans-serif"}}>Step 2</h4>
        <p style={{fontfamily: "Noto Sans KR', sans-serif"}}>Prebooked Hub </p>
      </div>
      <div class="servicebox last col-sm">
        <h4 style={{fontfamily: "Raleway, sans-serif"}}>Step 3</h4>
        <p style={{fontfamily: "Noto Sans KR', sans-serif"}}>Get Service On Time </p>
      </div>
    </div>
  </div>
</div>

<section class="section" id="pricing">
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-6 col-lg-3 ">

        {/* <!-- Heading --> */}
        <h2 class="lg-title mb-2 ">
          Affordable Charging Power
        </h2>

        {/* <!-- Subheading --> */}
        <p style={{fontfamily: "Noto Sans KR', sans-serif"}} class="my-4 ">
          It Is A System Application For People Who Never Want To Go To Gas Station Gain
        </p>


        <p class="text-primary mt-3">*Pricing plan may vary on the basis of level</p>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="pricing-block">
          <h2>Level1</h2>

          <h3 class="price my-3 ">
            135 <small>रू</small>
          </h3>

          <ul class="list-unstyled">
            <li>Voltage: 120V1-Phase AC</li>
            <li>AMPS: 12-16 Amps</li>
            <li>Charging Loads: 1.4 to 1.9 KW</li>
            <li>Charge Time For Vechicle:</li>
            <li>3-5 Miles of Range Per Hour</li>
          </ul>

          {/* <!-- <a href="#" class="btn btn-outline-dark">Purchase now</a> --> */}
        </div>
      </div>

      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="pricing-block">
          <h2>Level2</h2>

          <h3 class="price my-3 ">
            225 <small>रू</small>
          </h3>

          <ul class="list-unstyled">
            <li>Voltage: 208V or 240V1-Phase AC</li>
            <li>AMPS: 12-80 Amps (Typ. 32 Amps)</li>
            <li>Charging Loads: 2.5 to 19.2 KW (Typ. 7 KW)</li>
            <li>Charge Time For Vechicle:</li>
            <li>10-20 Miles of Range Per Hour</li>
          </ul>

          {/* <!-- <a href="#" class="btn btn-outline-dark">Purchase now</a> --> */}
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="pricing-block">
          <h2>Level3</h2>

          <h3 class="price my-3 ">
            975 <small>रू</small>
          </h3>

          <ul class="list-unstyled">
            <li>Voltage: 208V or 480V3-Phase AC</li>
            <li>AMPS: 125 Amps(Typ. 60 Amps)</li>
            <li>Charging Loads: 90 KW (Typ. 50 KW)</li>
            <li>Charge Time For Vechicle:</li>
            <li>80% Chargein 20-30 Minutes</li>
          </ul>

          {/* <!--   <a href="#" class="btn btn-outline-dark">Purchase now</a> --> */}
        </div>
      </div>
    </div>
    {/* <!-- / .row --> */}
  </div>
</section>
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-5">
            <h2 class="footer-heading mb-4">About Us</h2>
            <p>It Is A System Application For People Who Never Want To Go To Gas Station Gain</p>
          </div>
          <div class="col-md-3 ml-auto">
            <h2 class="footer-heading mb-4">Features</h2>
            <ul class="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div class="col-md-3">
              <h2 class="footer-heading mb-4">Follow Us</h2>
              <a href="https://www.facebook.com/shreedizdaiki" class="pl-3 pr-3"><span class="icon-twitter"><i class="fab fa-facebook"></i></span></a>
              <a href="https://www.facebook.com/michelle.mdr.3" class="pl-3 pr-3"><span class="icon-twitter"><i class="fab fa-instagram"></i></span></a>
              <a href="https://www.facebook.com/nilaa.manandhar" class="pl-3 pr-3"><span class="icon-instagram"><i class="fab fa-twitter"></i></span></a>
              <a href="https://www.facebook.com/praful.manandhar.58" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
            </div>
        </div>
      </div>
      <div class="col-md-3">
        <h2 class="footer-heading mb-4">Subscribe Newsletter</h2>
        <form action="#" method="post">
          <div class="input-group mb-3">
            <input type="text" class="form-control border-secondary text-white bg-transparent"
              placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
            <div class="input-group-append">
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row pt-5 mt-5 text-center">
      <div class="col-md-12">
        <div class="border-top pt-5">
          <p>
           
     
          </p>
        </div>
      </div>

    </div>
  </div>
</footer>
</div>


    )
  }
}
