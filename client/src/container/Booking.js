import React, { Component } from "react";
import BookingPageImage from "../ImageSliderImages/img2.jpg";
import { connect } from "react-redux";
import {Input,DatePicker} from 'reactstrap';
import Axios from "axios";
class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ow_username:'',
      ow_address:'',
      ow_availability:'',
      booking: false,
      time:'',
      homeownerId: props.id,
      date:new Date().toISOString()
    };
  }
  componentDidMount = async () => {
    await Axios.get(
      `http://localhost:5000/api/users/homeowner/${this.state.homeownerId}`
    )
      .then(res => {
        console.log(res.data[0].ow_username);
        this.setState({
ow_username:res.data[0].ow_username,
ow_address:res.data[0].ow_address,
ow_availability:res.data[0].ow_availability
     });

      })
      .catch(err => console.log(err));
  };

  book = () => {
    this.setState({ booking: true 
      
    });
    const bookingdetail = {
      ow_id: this.state.homeownerId,
      ev_id: this.props.evid,
      datetotravel:document.querySelector("#date").value,
      estimatedtime:document.querySelector("#estimatedtime").value,
      chargingduration:document.querySelector("#chargingduration").value,
    };
    Axios.post('http://localhost:5000/api/users/booking',bookingdetail).then(res=>{
      if(res.data.success){
        this.setState({booking:true})
      }
    }).catch(err=>console.log(err))
  };
  render() {
    return (
      <div>
        <body class="profile-page">
          <div class="profile-main-wrapper">
            <div class="profile-banner">
              <img src={BookingPageImage} alt="" />
            </div>
            <div class="profile-holder">
              <div class="img-holder">
                <img src={BookingPageImage} alt="dsfasdf" />
              </div>
              <div class="profile-cnt">
                <ul>
                  <li>
                    <span class="profile-label">Name :</span>
                    <span class="profile-value">{this.state.ow_username}</span>
                  </li>
                  <li>
                    <span class="profile-label">Location :</span>
                    <span class="profile-value">{this.state.ow_address}</span>
                  </li>
                  <li>
                    <span class="profile-label">Availability. :</span>
                    <span class="profile-value">{this.state.ow_availability}</span>
                  </li>
                  <li>
                    <span class="profile-label">Estimated Time :</span>
                    <span class="profile-value"><input type="time" placeholder="time" id="estimatedtime"/></span>
                  </li>
                  <li>
                    <span class="profile-label">Charging Duration</span><span> <Input type="select" name="select" id="chargingduration">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input></span>
                  </li>
                  <li>
                    <span class="profile-label">Date To Travel :</span>
                    <span class="profile-value"><input placeholder={this.state.date} id="date"/></span>
                  </li>
                  <li>
                    <button onClick={this.book} class="book-btn">
                      Book
                    </button>
                  </li>
                  <li>{this.state.booking?"Your Booking has been submited":"Sorry Something went wrong"}</li>
                </ul>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  evid: state.userdata
});

export default connect(mapStateToProps)(Booking);
