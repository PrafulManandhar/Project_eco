import React, { Component } from 'react'
import Navbar from './Navbar';
import axios from "axios";
import { connect } from "react-redux";
import {position} from '../../Action/dataAction';
import { loginusersdata } from "../../Action/loginUserDataAction";
import OpenStreetMap from './OpenStreetMap';
import Map from './Map'
import HomeownerTable from './HomeownerTable';
class evCustomerMainDashboard extends Component {

  componentWillMount = () => {
    axios
       .get("http://localhost:5000/api/users/dashboard")
       .then(res =>{
         console.log("Login user information",res.data)
         this.props.loginusersdata(res.data);
         console.log("Login User info",this.props.UserInfo)
       })
     axios.get("http://localhost:5000/api/users/location").then(res=>{
       console.log("longitude and latitude",res.data);
       this.props.position(res.data)
       console.log("Data Reducer",this.props.Data.data[0])
     })
        
   };
  render() {
    return (
      <div>
        <Navbar/>
        <hr style={{ margintop:"5px",
 marginbottom:"5px",
 height:"1px",
 width:"100%",
 bordertop:"1px solid black"}}/>
        {/* {this.props.Data.data.map(data=><Map data={data}/>)} */}
        <Map/>
        <HomeownerTable/>
      </div>
    )
  }
}

const mapActionToProps = dispatch => ({
  loginusersdata: payload => dispatch(loginusersdata(payload)),
  position:payload=>dispatch(position(payload))
});

const mapStateToProps = state => ({
  UserInfo: state.userdata,
  Data:state.locationdata
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(evCustomerMainDashboard);

