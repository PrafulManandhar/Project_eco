import React, { Component } from 'react'
import Navbar from './Navbar';
import { Container,Row,Col } from 'react-bootstrap';
export default class SuccessMsg extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12"><Navbar/></Col>
        
        </Row>
        <Row>
            You have Successfully Register . Please Verify Your Account by clicking into the link send you in your <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" >Email</a>
        </Row>
      </Container>
        
        
    )
  }
}
