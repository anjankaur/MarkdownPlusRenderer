import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FileUploader from "./components/file_uploader";
import io from "socket.io-client";

const socket = io("http://localhost:8050/generate"); //TODO config file
class App extends Component {
  sendDataToServer = data => {
    socket.emit("send_markdown", data);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FileUploader sendDataToServer={this.sendDataToServer} />
      </div>
    );
  }
}

export default App;
