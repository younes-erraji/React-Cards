import React, { Component } from "react";
import "./../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1
          style={{
            margin: "8px",
            fontSize: "28px",
          }}
        >
          {this.props.Brand}
        </h1>
      </nav>
    );
  }
}
export { Navbar };
