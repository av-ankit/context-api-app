import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

class ModalDetails extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModal}>
          <Modal.Header closeButton>
            <Modal.Title><strong>Product Details</strong></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table variant='primary' striped bordered >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>

                  <th>In Stock?</th>
                  <th>Brand</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.productValue.id}</td>
                  <td>{this.props.productValue.name}</td>
                  <td>{this.props.productValue.price}</td>

                  <td>{this.props.productValue.in_stock}</td>
                  <td>{this.props.productValue.brand}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalDetails;
