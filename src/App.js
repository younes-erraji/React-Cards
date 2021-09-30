import React, { Component } from "react";
import { Navbar } from "./components/Navbar";
import Members from "./Members";
import Content from "./components/Content";
import Footer from "./components/Footer";

const members = Members;

let elements = [];
for (let i = 0; i < members.length; i++) {
  elements.push(Content(members[i]));
}
class App extends Component {
  render() {
    return (
      <div>
        <Navbar Brand={"Younes' s Cards"} />
        <div className="container"> {elements} </div>
        <Footer />
      </div>
    );
  }
}

export default App;
