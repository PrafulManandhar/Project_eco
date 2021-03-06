import React, { Component } from "react";
import BookingPageImage from "../ImageSliderImages/img2.jpg";
import HomeownerImage from "../ImageSliderImages/user.png";
import { connect } from "react-redux";
import { Input, DatePicker } from "reactstrap";
import Axios from "axios";
import BookingValidation from "../Validator/BookingValidataion";
import HomeownerTable from "./ecCustomerDashboard/HomeownerTable";
class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ow_username: "",
      ow_address: "",
      ow_availabilityFrom: "",
      ow_availabilityTo:'',
      booking: false,
      ow_image:'',
      time: "",
      homeownerId: props.id,
      date: new Date().toISOString()
    };
  }
  componentDidMount = async () => {
    console.log(this.state.homeownerId);
    await Axios.get(
      `http://localhost:5000/api/users/homeowner/${this.state.homeownerId}`
    )
      .then(res => {
        console.log(res.data[0].ow_username);
        this.setState({
          ow_username: res.data[0].ow_username,
          ow_address: res.data[0].ow_address,
          ow_availabilityFrom: res.data[0].ow_availabilityFrom,
          ow_availabilityTo:res.data[0].ow_availabilityTo,
          ow_image:res.data[0].ow_image
        },()=>console.log(this.state));
      })
      .catch(err => console.log(err));
  };

  book = () => {
    const bookingdetail = {
      owid: this.state.homeownerId,
      evid: this.props.evid.userInfo.id,
      datetotravel: document.querySelector("#date").value,
      estimatedtime: document.querySelector("#estimatedtime").value,
      chargingduration: document.querySelector("#chargingduration").value
    };
    console.log("Booking detail", bookingdetail);
    const { error, isValid } = BookingValidation(bookingdetail);
    if (isValid) {
      Axios.post("http://localhost:5000/api/users/booking", bookingdetail)
        .then(res => {
          if (res.data.success) {
            this.setState({ booking: true });
          }
        })
        .catch(err => console.log(err));
    }
  };
  render() {
    let utc = new Date().toJSON().slice(0, 10);
    return (
      <div>
        <body class="profile-page">
          <div class="profile-main-wrapper">
            <div class="profile-banner">
              <img src={BookingPageImage} alt="" />
            </div>
            <div class="profile-holder">
              <div class="img-holder">
                {console.log(this.state.ow_image)}
                {(!this.state.ow_image)?<img src={require(`../profilePhoto/noimage.jpg`)}/>:<img src={require(`../profilePhoto/${this.state.ow_image}`)}/>}
                {/* <img src={HomeownerImage} alt="dsfasdf" /> */}
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
                    <span class="profile-label">Available From. :</span>
                    <span class="profile-value">
                      {this.state.ow_availabilityFrom}
                    </span>
                  </li>
                  <li>
                    <span class="profile-label">Available To. :</span>
                    <span class="profile-value">
                      {this.state.ow_availabilityTo}
                    </span>
                  </li>
                  <li>
                    <span class="profile-label">Estimated Time :</span>
                    <span class="profile-value">
                      <input
                        type="time"
                        placeholder="time"
                        id="estimatedtime"
                      />
                    </span>
                  </li>
                  <li>
                    <span class="profile-label">Charging Duration</span>
                    <span>
                      {" "}
                      <Input type="select" name="select" id="chargingduration">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Input>
                    </span>
                  </li>
                  <li>
                    <span class="profile-label">Date To Travel :</span>
                    <span class="profile-value">
                      <input
                        className="form-control"
                        type="date"
                        placeholder={this.state.date}
                        id="date"
                        min={utc}
                      />
                     
                    </span>
                  </li>
                  <li>
                    <button onClick={this.book} class="book-btn">
                      Book
                    </button>
                  </li>
                  <li>
                    {this.state.booking
                      ? "Your Booking has been submited"
                      : "fdsfsd"}
                  </li>
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
