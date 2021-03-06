import React, { Component } from "react";
// import { connnect } from "react-redux";
// import Img from "../../bootstrap/images/prafulimage.jpg";
import { connect } from "react-redux";
import { logout } from "../../Action/loginAction";
import { logoutusersdata } from "../../Action/loginUserDataAction";
import {delwhilelogout} from '../../Action/dataAction';
import { withRouter } from "react-router-dom";
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
  


  logout = () => {
    localStorage.clear();
    this.props.logout();
    this.props.auth();
    this.props.locationDataDel();
    this.props.history.replace("/");
  };
  render() {
    
    return (
      <div>
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <NavLink class="navbar-brand" to="/evdashboardmain">
              ECO<span> CHARGE</span><span>HUB</span>
            </NavLink>
          {/* <!-- Sidebar Toggle (Topbar) --> */}
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars" />
          </button>

          {/* <!-- Topbar Search --> */}
          {/* <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">

              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form> */}

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
                <span class="badge badge-danger badge-counter">0</span>
              </a>
              {/* <!-- Dropdown - Alerts --> */}
              <div
                class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 class="dropdown-header">Alerts Center</h6>
                
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white" />
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>
                  </div>
                </a>
                
             </div>
            </li>

            {/* <!-- Nav Item - Messages --> */}
            <li class="nav-item dropdown no-arrow mx-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-envelope fa-fw" />
                {/* <!-- Counter - Messages --> */}
                <span class="badge badge-danger badge-counter">7</span>
              </a>
              {/* <!-- Dropdown - Messages --> */}
              <div
                class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown"
              >
                <h6 class="dropdown-header">Message Center</h6>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                      alt=""
                    />
                    <div class="status-indicator bg-success" />
                  </div>
                  <div class="font-weight-bold">
                    <div class="text-truncate">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                      alt=""
                    />
                    <div class="status-indicator" />
                  </div>
                  <div>
                    <div class="text-truncate">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div class="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
                      alt=""
                    />
                    <div class="status-indicator bg-warning" />
                  </div>
                  <div>
                    <div class="text-truncate">
                      Last month's report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                  </div>
                </a>
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image mr-3">
                    <img
                      class="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt=""
                    />
                    <div class="status-indicator bg-success" />
                  </div>
                  <div>
                    <div class="text-truncate">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren't
                      good...
                    </div>
                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                  </div>
                </a>
                <a
                  class="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Read More Messages
                </a>
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block" />

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
                  {/* {console.log("username",this.props.UserInfo.userInfo.username)} */}
                  {this.props.UserInfo.userInfo.username}
                </span>
                <img class="img-profile rounded-circle"  src={require(`../../profilePhoto/11.jpg`)}/>
              </a>
              {/* <!-- Dropdown - User Information --> */}
              <div
                class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <NavLink class="dropdown-item" to="/evprofile">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                  Profile
                </NavLink>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                  Settings
                </a>
                <NavLink class="dropdown-item" to="/mybooking">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                  My Booking History
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
  auth: () => dispatch(logoutusersdata()),
  locationDataDel:()=>dispatch(delwhilelogout())
});

const mapStateToProps = state => ({
  UserInfo: state.userdata,
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(withRouter(Navbar));
