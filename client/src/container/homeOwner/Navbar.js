import React, { Component } from "react";
import { connnect } from "react-redux";
import Img from "../../bootstrap/images/prafulimage.jpg";
import { connect } from "react-redux";
import { logout } from "../../Action/loginAction";
import {
  loginbookingdata,
  logoutbookingdata
} from "../../Action/bookingAction";
import {
  loginusersdata,
  logoutusersdata
} from "../../Action/loginUserDataAction";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Notify from "../Notify";

class Navbar extends Component {
  logout = () => {
    localStorage.clear();
    this.props.logout();
    this.props.logoutusersdata();
    this.props.logoutbookingdata();
    this.props.history.replace("/");
  };
  render() {
   
    return (
      <div>
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* <!-- Sidebar Toggle (Topbar) --> */}
          <NavLink class="navbar-brand" to="/homedashboard">
            ECO<span> CHARGE</span>
            <span>HUB</span>
          </NavLink>
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars" />
          </button>
          {/* <!-- Topbar Navbar --> */}
          <ul class="navbar-nav ml-auto">
            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-search fa-fw" />
              </a>
              {/* <!-- Dropdown - Messages --> */}
              <div
                class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            {/* <!-- Nav Item - Alerts --> */}
            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-bell fa-fw" />
                {/* <!-- Counter - Alerts --> */}
                <span class="badge badge-danger badge-counter">
                  {Object.keys(this.props.bookingdata.bookingInfo).length}
                </span>
              </a>
              {/* <!-- Dropdown - Alerts --> */}
              <div
                class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 class="dropdown-header">Alerts Center</h6>
                {/* {notification} */}
              </div>
            </li>

            {/* <!-- Nav Item - User Information --> */}
            <li class="nav-item dropdown no-arrow">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                  {this.props.UserInfo.userInfo.username}
                </span>
                <img class="img-profile rounded-circle" src />
              </a>
              {/* <!-- Dropdown - User Information --> */}
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <NavLink class="dropdown-item" to="/homeprofile">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
                </NavLink>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                  Settings
                </a>
                <NavLink class="dropdown-item" to="/history">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                  My Service History
                </NavLink>
                <div class="dropdown-divider" />
                <button className="dropdown-item" onClick={this.logout}>
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapActionToProps = dispatch => ({
  logout: () => dispatch(logout()),
  logoutusersdata: () => dispatch(logoutusersdata()),

  logoutbookingdata: () => dispatch(logoutbookingdata())
});

const mapStateToProps = state => ({
  UserInfo: state.userdata,
  bookingdata: state.bookingdata
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(withRouter(Navbar));
