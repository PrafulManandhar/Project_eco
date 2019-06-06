import React, { Component } from 'react'
import One from '../ImageSliderImages/3.jpg'
import Two from '../ImageSliderImages/2.jpg'
import Three from '../ImageSliderImages/3.jpg'
export default class ImageSlider extends Component {
  render() {
    return (
      <div className="imageslider">
        <div className = "overlay">
          <div className = "details-container">
            <div className = "header">
              Eco Charge Hub
            </div>
            <div className = "description">
            Go Green and Use Renewable resources.
            </div>
            
          </div>
        </div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={One} class="d-block w-100 h-50" alt="..." style={{objectPosition:"top"}}/>
    </div>
    <div class="carousel-item">
      <img src={Two} class="d-block w-100 h-50" alt="..." style={{objectPosition:"top"}}/>
    </div>
    <div class="carousel-item">
      <img src={Three} class="d-block w-100 h-50" alt="..." style={{objectPosition:"top"}}/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
    )
  }
}