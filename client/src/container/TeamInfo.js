import React, { Component } from "react";

export default class TeamInfo extends Component {
  render() {
    return (
      <div>
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style={{transform:" translate3d(-1830px, 0px, 0px)", transition:" all 0.25s ease 0s", width: "6710px"}}
          >
            <div class="owl-item cloned" style={{width:" 610px"}}>
              <div class="item">
                <div class="testimony-wrap py-4 pb-5">
                  <div
                    class="user-img mb-4"
                    style={{backgroundColor:"red"}}
                  >
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left" />
                    </span>
                  </div>
                  <div class="text text-center">
                    <p class="mb-4" style={{color:"black"}}>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </p>
                    <p class="name">Roger Scott</p>
                    <span class="position">Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
