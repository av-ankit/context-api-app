import React, { Component } from "react";
import "./../App.css";
import { Jumbotron, Button } from "react-bootstrap";
import Listo from "./extraDetail";
import FewDetail from "./fewDetail";
class Jumbo extends Component {
  constructor() {
    super();
    this.state = {
      showExtraDetails: false,
    };
  }

  toggle = () => {
    this.setState({ showExtraDetails: !this.state.showExtraDetails });
  };
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Product {this.state.showExtraDetails ? `Stock` : `List`}</h1>
          <div>{this.state.showExtraDetails ? <Listo /> : <FewDetail />}</div>

          <div>
            <Button variant="outline-warning" onClick={this.toggle}>
              {this.state.showExtraDetails ? `Less Details` : `Check Stock`}
            </Button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
