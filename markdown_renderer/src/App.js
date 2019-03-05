import React, { Component } from "react";
import "./App.css";
import MarkdownPlusRenderer from "./modules/markdown_plus/MarkdownPlusRenderer";

//Not reeuired, handling in index.js.
// But main app component can be formed this way
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    new MarkdownPlusRenderer("root", this.state.text);
  }
  setSocketListeners() {
    this.props.socket.on("markdown_received", data => {
      this.setState({
        text: data
      });
    });
  }
  componentDidMount() {
    this.setSocketListeners();
  }
  render() {
    return null;
  }
}

export default App;
