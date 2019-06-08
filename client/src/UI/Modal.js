import React from "react";
import { Modal, Button } from "react-bootstrap";
import Booking from '../container/Booking'
const Example = props => (
    
  <Modal show={props.show} onHide={props.close}>
    <Modal.Header closeButton>
        {console.log(props)}
      <Modal.Title style={{fontSize:"18px"}}>{props.action} User</Modal.Title>
    </Modal.Header>
    
    <Modal.Body style={{padding:"0"}}><Booking id={props.id}/>
    </Modal.Body>
    <Modal.Footer style={{padding:"8px"}} >
      <Button size="sm" variant="secondary" onClick={props.close}>
        Close
      </Button>
      <Button size="sm" variant="primary" onClick={props.close}>
        Confirm Booking
      </Button>
    </Modal.Footer>
  </Modal>
);

export default Example;
