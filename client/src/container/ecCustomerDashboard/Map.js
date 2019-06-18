import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { connect } from "react-redux";
// import * as location from '../../locationJson/location.json'
// import axios from "axios";

function Map() {
  const [viewport, setViewport] = useState({
    lagitute: 27.779641,
    longitude: 85.018253,
    width: "100%",
    height: "50vh",
    zoom: 4
  });

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
