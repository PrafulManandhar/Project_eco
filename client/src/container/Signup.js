import React, { Component } from "react";
import Home from "../logo/home.png";
import Car from "../logo/car.png";
import Arrow from "../logo/arrow.png";
import {NavLink} from 'react-router-dom';
import Navbar from "./Navbar";
export default class Signup extends Component {
  render() {
    return (
      <div>
        
        <Navbar/>
        <div className="signup">
          <div className="signup-block">
            <div className="signup-logo">
              <img src={Home} style={{ height: "10vh", width: "10vh" }} />
            </div>
            <div className="signup-main">
            <div > <NavLink to='/signupasprovider' className="signup-name">Sign up as HomeOwner</NavLink></div>
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
            <div > <NavLink to='/signupasreciver' className="signup-name">Sign up as EvCustomer</NavLink></div>
              <div className="arrow">
                <img src={Arrow} style={{ height: "5vh", width: "8vh" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <img src={Home} style={{height:"10vh",width:"10vh"}}/> */
}
{
  /* <img src={Car} style={{height:"10vh",width:"10vh"}}/> */
}
