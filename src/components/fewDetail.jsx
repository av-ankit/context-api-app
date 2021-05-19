import React, { Component } from "react";
import "./../App.css";
import { Table } from "react-bootstrap";
import myContext from "../Context";
import ModalDetails from "./showModaldetails";
class FewDetail extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      in_stock: "",
      brand: "",
      price:'',
      showModal: false,
    };
  }
  //function catches values of clicked item
  showProductDetails = (currentProduct) => {
    console.log("currentProduct", currentProduct);

    this.setState({
      id: currentProduct.id,
      name: currentProduct.name,
      in_stock: currentProduct.stock,
      brand: currentProduct.brand,
      price:currentProduct.price,
      showModal: true,
    });
  };

  closeModal =()=>{
    this.setState({showModal:false})
  }

  render() {
    console.log(myContext);
    console.log("state", this.state);

    const productValue = {
      id: this.state.id,
      name: this.state.name,
      price:this.state.price,
      in_stock: this.state.in_stock,
      brand: this.state.brand,
    };
    return (
      <div>
        <myContext.Consumer>
          {({ productDetails }) => (
            <div>
              <Table striped variant='info' bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                  </tr>
                </thead>
                <tbody>
                  {/* mapping the product list to TABLE */}
                  {productDetails.map((list) => (
                    <tr
                      key={list.id}
                      onClick={() => this.showProductDetails(list)}>
                      {/*capturing values of clicked prod*/}
                      <td>{list.id}</td>
                      <td>{list.name} </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <ModalDetails
                showModal={this.state.showModal}
                productValue={productValue}
                closeModal={this.closeModal}
              />
            </div>
          )}
        </myContext.Consumer>
      </div>
    );
  }
}

export default FewDetail;
