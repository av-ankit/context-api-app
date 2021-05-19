import React, { Component } from "react";
import "./../App.css";
import { Table } from "react-bootstrap";
import myContext from "../Context";
class Listo extends Component {
  render() {
    //console.log(myContext);
    return (
      <div>
        {/* <h1>hi from listo</h1> */}

        <myContext.Consumer>
          {({ productDetails }) => (
            <Table striped variant="primary" hover size="sm">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>In Stock?</th>
                </tr>
              </thead>
              <tbody>
                {productDetails.map((list) => (
                  <tr key={list.id}>
                    <td>{list.name} </td>
                    <td>{list.stock}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </myContext.Consumer>
      </div>
    );
  }
}

export default Listo;
