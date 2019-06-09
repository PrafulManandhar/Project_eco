import React, { Component } from 'react'
import Navbar from '../Navbar';

export default class MyProfile extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <body>
  <div class="ower-profiler-page">
  <div class="ower-profiler-holder">
 <div class="container">
  <div class="ower-profile-section">
<div class="row">
  <div class="col-sm-3 col-3">
    <div class=" ower-profile--left">
      <div class="profile-img-holder"><img src="img/user.png" alt=""/></div>
      <div class="ower-profile--info">
        <h3>Sanu Maya</h3>
        <a href="#" class="email">sanumaya15@gmail.com</a>
        <span class="phone">1231312312</span>
      </div>
    </div>
  </div>
  <div class="col-9">
    <div class="ower-profile--right">
      <div class="ower-profile--basicInfo">
        <div class="basicInfo-item">
          <h4>About Me</h4>
          <ul>
            <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum varius scelerisque. Nulla facilisi. Nam ultricies ante in consectetur pulvinar. In euismod, leo nec fringilla blandit, est mauris scelerisque augue, ut ultricies risus ex ut eros. Cras ultrices fermentum sodales.</p>
              <p>In euismod, leo nec fringilla blandit, est mauris scelerisque augue, ut ultricies risus ex ut eros. Cras ultrices fermentum sodales.</p>
            </li>
          </ul>
        </div>
        <div class="basicInfo-item">
          <h4>Basic Information</h4>
          <ul>
            <li><span class="bi-label">Address:</span><span class="bi-value">Kalimati</span></li>
            <li><span class="bi-label">Zone:</span><span class="bi-value">Kathmandu</span></li>
            <li><span class="bi-label">District:</span><span class="bi-value">kathmandu</span></li>
            <li><span class="bi-label">Pan number:</span><span class="bi-value">123123123123</span></li>
            <li><span class="bi-label">Register date:</span><span class="bi-value">2075/2/2</span></li>
            <li><span class="bi-label">Open/close time:</span><span class="bi-value">5am - 10pm</span></li>
          </ul>
        </div>
        <a href="#" class="blue-btn">Edit profile</a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</body>
      </div>
    )
  }
}
