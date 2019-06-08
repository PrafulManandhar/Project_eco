import React, { Component } from 'react'
import L from 'leaflet'
// import {Marker,Popup} from reactleaflet
export default class OpenStreetMap extends Component {
  state = {
    latitude: 51.505,
    longitude: -0.09,
  }
  componentDidMount(){
    if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition);
      navigator.geolocation.getCurrentPosition((position)=>{
        
        this.setState({
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        },()=>{
          console.log({latitude:this.state.latitude,longitude:this.state.longitude})
          var mymap = L.map('mapid').setView([this.state.latitude, this.state.longitude], 20);
          L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicHJhZnVsMTMiLCJhIjoiY2p2bTBzNzI3MGluNzN6dm5hZWZkaWw0dCJ9.yfX8FE5n_vMa5IFvlXjeCA', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1IjoicHJhZnVsMTMiLCJhIjoiY2p2bTBzNzI3MGluNzN6dm5hZWZkaWw0dCJ9.yfX8FE5n_vMa5IFvlXjeCA'
      }).addTo(mymap);
        
      L.marker([this.state.latitude, this.state.longitude],{icon:L.icon.div});
    })
      });
    } else {
      console.log('permission denied')
    }
    console.log({latitude:this.state.latitude,longitude:this.state.longitude})
  
  }
  render() {
    return (
      <div className="container fluid">
         <div id="mapid" style = {{height:'50vh' , width:"70%"}}>
          
          </div>
      </div>
     
    )
  }
}
