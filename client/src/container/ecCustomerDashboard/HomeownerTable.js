import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { Button, Table, Container, Row, Col } from "react-bootstrap";
import Example from "../../UI/Modal"

const dataTableData = {
  columns: [
    {
      label: "S.No",
      field: "sno",
      sort: "asc"
    },
    {
      label: "Owner Name",
      field: "name",
      sort: "asc"
    },
    {
      label: "Station Location",
      field: "location",
      sort: "asc"
    },
    {
      label: "Service Availability From ",
      field: "availabilityfrom",
      sort: "asc"
    },
    {
      label: "Service Availability To ",
      field: "availabilityto",
      sort: "asc"
    },
    {
      label: "User Status",
      field: "userStatus",
      sort: "asc"
    },
    {
      label: "Actions",
      field: "actions",
      sort: "asc"
    }
  ],
  rows: []
};

export default class HomeownerTable extends Component {
  state = {
    data: "",
    loading: true,
    modalShow: false,
    action: "",
    id: ""
  };
  async componentDidMount() {
    await axios
      .get("http://localhost:5000/api/users/homeowner")
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));

    for (let home of this.state.data) {
      dataTableData.rows.push({
        sno: home.ow_id,
        name: home.ow_username,
        location: home.ow_address,
        availabilityFrom: home.ow_availabilityFrom,
        availabilityTo: home.ow_availabilityTo,

        userStatus: home.login_status,
        action: (
          <button
            className="btn btn-outline-dark"
            onClick={event => {
              event.persist();
              this.actionHandler(event);
            }}
            data-id={home.ow_id}
          >
            Booking
          </button>
        )
      });
    }
    this.setState({ loading: false });
  }
  booking = id => {
    this.modalShow();
    this.setState({ action: "booking", id });
  };

  modalClose = () => {
    this.setState({ modalShow: false });
  };

  modalShow = () => {
    this.setState({ modalShow: true });
  };

  actionHandler = event => {
    event.preventDefault();
    const id = event.target.dataset.id;
    this.booking(id);
  };

  render() {
    let display = <p>Add a spinner here</p>;
    if (!this.state.loading) {
      display = (
        <Container>
          <Row>
            <Col md={{ span: 9, offset: 1 }}>
              <MDBDataTable
                striped
                hover
                data={dataTableData}
                searching={true}
              />
            </Col>
          </Row>
          <Example
            show={this.state.modalShow}
            close={this.modalClose}
            action={this.state.action}
            id={this.state.id}
          />
        </Container>
      );
    }
    return <div>{display}</div>;
  }
}
