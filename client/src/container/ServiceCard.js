import React, { Component } from "react";

export default class ServiceCard extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div class="media block-6 services py-4 d-block text-center">
                <div class="d-flex justify-content-center">
                  <div class="icon">
                    <span class="flaticon-pin" />
                  </div>
                </div>
                <div class="media-body p-2 mt-2">
                  <h3 class="heading mb-3">
                    Find Places Anywhere In The World
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div class="media block-6 services py-4 d-block text-center">
                <div class="d-flex justify-content-center">
                  <div class="icon">
                    <span class="flaticon-detective" />
                  </div>
                </div>
                <div class="media-body p-2 mt-2">
                  <h3 class="heading mb-3">We Have Agents With Experience</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex align-sel Searchf-stretch ftco-animate fadeInUp ftco-animated">
              <div class="media block-6 services py-4 d-block text-center">
                <div class="d-flex justify-content-center">
                  <div class="icon">
                    <span class="flaticon-house" />
                  </div>
                </div>
                <div class="media-body p-2 mt-2">
                  <h3 class="heading mb-3">Buy &amp; Rent Modern Properties</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
              <div class="media block-6 services py-4 d-block text-center">
                <div class="d-flex justify-content-center">
                  <div class="icon">
                    <span class="flaticon-purse" />
                  </div>
                </div>
                <div class="media-body p-2 mt-2">
                  <h3 class="heading mb-3">Making Money</h3>
                  <p>
                    A small river named Duden flows by their place and supplies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
