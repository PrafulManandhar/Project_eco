import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div>
        	<div class="block">
			<h3>Make Good Money</h3>
			<span class="dot1" style={{fontsize:"70px"}}></span>
			<p>Want to earn? Earn good sum of money by providing charging hub for the EV users and get a chance to convert probable customer to prospect customer.
			</p>
		</div>
		<div class="block">
			<h3>Charge Where You Want, When You Want</h3>
			<span class="dot2" style={{fontsize:"70px"}}></span>
			<p>Looking for charging hub?? So many service provider (charging station) to choose from. Locate from the map and charge your EV vehicle and get ready to set off.
			</p>
		</div>
		<div class="block">
			<h3>No Hassel, No Problem</h3>
			<span class="dot3" style={{fontsize:"70px"}}></span>
			<p>Easy to locate the service provider and EV customer. Just a simple step, create your account and you are good to go.</p>
		</div>

      </div>
    )
  }
}
