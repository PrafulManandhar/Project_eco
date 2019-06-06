import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import MainDashboard from './container/MainDashboard';
import Login from './container/Login';
import Signup from '../src/container/Signup';
import Signupasprovider from '../src/container/Signupasprovider';
import Signupasreciver from '../src/container/Signupasreciver';

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

      </Switch>
      
    </div>
  );
}

export default App;
