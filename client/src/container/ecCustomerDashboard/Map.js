import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";
import * as location from '../../locationJson/location.json'
import axios from "axios";

function Map() {
  const [viewport, setViewport] = useState({
    lagitute: 27.779641,
    longitude: 85.018253,
    width: "100%",
    height: "50vh",
    zoom: 4
  });

  // const Location=[
  //   {
  //   id:1,
  //   name:"leknath",
  //   lng:28.201167,
  //   lat:83.980158
  // },
  // {
  //   id:2,
  //   name:"leknath",
  //   lng:28.172465,
  //   lat:84.052904
  // },
  // {
  //   id:3,
  //   name:"leknath",
  //   lng:28.174859,
  //   lat:84.049826
  // },
  // {
  //   id:4,
  //   name:"leknath",
  //   lng:28.172942,
  //   lat:83.052364
  // },
  // {
  //   id:5,
  //   name:"baireni",
  //   lng:27.779641,
  //   lat:85.018253
  // }
  // ]
  // axios.get("http://localhost:5000/api/users/location").then(res => {
  //   setLocationdata({ data: res.data });
  // });
  // const [locationdata, setLocationdata] = useState({
  //   data: ""
  // });

  // axios.get(`http://localhost:5000/api/users/position`).then(res=>this.props.location(res)).catch(err=>{
  //   console.log("err while fatching the data from the database about the position of the charging  hub",err)
  // })
  // console.log(data[0])

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/praful13/cjwjasuq61cw41co26emvmhby"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {/* {location.Location.map((data)=>{<Marker key={data.id} latitude= {data.lat}
        longitude={data.lng}><div>chargehub</div></Marker>})} */}
        Marker Here
      </ReactMapGL>
    </div>
  );
}

const mapStateToProps = state => ({
  UserInfo: state.userdata,
  Data: state.locationdata
});

const mapActionToProps = dispatch => ({
  // loginusersdata: payload => dispatch(loginusersdata(payload)),
  // position:payload=>dispatch(position(payload))
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(Map);
