import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
          id="ftco-navbar"
        >
          <div class="container">
            <NavLink class="navbar-brand" to="/">
              ECO<span> CHARGE</span><span>HUB</span>
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="oi oi-menu" /> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <NavLink to="/" class="nav-link">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/service" class="nav-link">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/contact" class="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li class="nav-item cta">
                  <NavLink to="/loginmain" class="nav-link ml-lg-2">
                    <span class="icon-user" /> Sign-In
                  </NavLink>
                </li>
                <li class="nav-item cta cta-colored">
                  <NavLink to="/signup" class="nav-link">
                    <span class="icon-pencil" /> Sign-Up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
