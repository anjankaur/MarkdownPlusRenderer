import React, { Component } from "react";
import { Provider } from "react-redux";
import Markdown from "./Markdown";
import store from "../store";

class MarkdownPlus extends Component {
  render() {
    return (
      <Provider store={store}>
        <Markdown />
      </Provider>
    );
  }
}

export default MarkdownPlus;
