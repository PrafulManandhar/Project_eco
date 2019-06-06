import React, { Component } from 'react'
import Home from "../logo/home.png";
import Car from "../logo/car.png";
import Arrow from "../logo/arrow.png";
import Banner from "./Banner";
import Navbar from "./Navbar";
import {Link}from 'react-router-dom'
export default class Signupinmain extends Component {
  render() {
    return (
  
         <div className="signupmain">
          <div className="signup-block">
            <div className="signup-logo">
              <img src={Home} style={{ height: "10vh", width: "10vh" }} />
            </div>
            
            <div className="signup-main">
              <div > <Link to='/signupasprovider' className="signup-name">Sign up to give</Link></div>
              <div className="arrow">
                <img src={Arrow} style={{ height: "5vh", width: "8vh" }} />
              </div>
            </div>
          </div>

          <div className="signup-block">
            <div className="signup-logo">
              <img src={Car} style={{ height: "10vh", width: "10vh" }} />
            </div>
            <div className="signup-main">
            <div > <Link to='/signupasreciver' className="signup-name">Sign up to take</Link></div>
              <div className="arrow">
                <img src={Arrow} style={{ height: "5vh", width: "8vh" }} />
              </div>
            </div>
          </div>
        </div>
     
        
    
    )
  }
}
