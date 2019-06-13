

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Cards from './Cards';
import {Container,Col,Row} from 'react-bootstrap';
import Navbar from './Navbar';

class BookingCards extends Component {
  state = {
        yourbookings:[]
      };
  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/api/users/evbooking/${this.props.id.userInfo.id}`
      )
      .then(res => {
        console.log(res.data.rows);
        this.setState({
          yourbookings: res.data.rows
        });
        console.log(this.state.yourbookings.length);
        // console.log(this.state.yourbookings[0].travel_date);
      });
  }
  render() {
  
    return (<Container maxWidth="sm">
      <Row>
      <Col md="12">
          <Navbar/>
          </Col>
        
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap:"wrap",
          padding:"10px"
        }}>
        {this.state.yourbookings.map(card=><Cards card={card}/>)}
       </div>
      </Row>
    </Container>)
  }
}

const mapStateToProps = state => ({
  id: state.userdata
});

export default connect(mapStateToProps)(BookingCards);
