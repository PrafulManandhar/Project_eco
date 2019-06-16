import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import MainDashboard from './container/MainDashboard';
import Login from './container/Login';
import Signup from '../src/container/Signup';
import Signupasprovider from '../src/container/Signupasprovider';
import Signupasreciver from '../src/container/Signupasreciver';
import evCustomerMainDashboard from './container/ecCustomerDashboard/evCustomerMainDashboard';
import Service from './container/Service';
import SuccessMsg from './container/SuccessMsg';
import MyProfile from './container/ecCustomerDashboard/MyProfile';
import BookingCards from './container/ecCustomerDashboard/BookingCards';
import HomeOwnerDashboard from './container/homeOwner/HomeOwnerDashboard';
import HomeLogin from './container/HomeLogin';
import HomeBookingCard from './container/homeOwner/HomeBookingCard';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component={MainDashboard} exact/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      {/* <Route path="/service" component={Service}/> */}
      {/* <Route path="/contact" component={Contact}/> */}
      <Route path="/signupasreciver" component={Signupasreciver}/>
        <Route path="/signupasprovider" component={Signupasprovider}/>
        <Route path="/evdashboardmain" component={evCustomerMainDashboard} exact/>
        <Route path="/service" component={Service} exact/>
        <Route path="/useradded" component={SuccessMsg} exact/>
        <Route path="/evProfile" component={MyProfile} exact/>
        <Route path="/mybooking" component={BookingCards} exact/>
        <Route path="/homedashboard" component={HomeOwnerDashboard} exact/>
        <Route path="/homelogin" component={HomeLogin} exact/>
        <Route path="/history" component={HomeBookingCard} exact/>




        {/* <Route path="/contact" component={evCustomerMainDashboard} exact/> */}

      </Switch>
      
    </div>
  );
}

export default App;
