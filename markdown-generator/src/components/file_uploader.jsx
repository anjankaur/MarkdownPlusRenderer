import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class FileUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0
    };
  }
  checkMimeType = event => {
    //getting file object
    let file = event.target.files[0];
    let err = "";
    // list allow mime type
    const types = ["text/plain", "text/markdown"];

    if (!file) {
      event.target.value = null;
    } else {
      if (types.every(type => file.type !== type)) {
        // create error message and assign to container
        err = file.type + " is not a supported format\n";
      }
      if (err !== "") {
        toast.error(err);
        event.target.value = null;
      }
    }
    return true;
  };

  checkFileSize = event => {
    let file = event.target.files[0];
    let size = 2000000;
    let err = "";
    if (!file) {
      event.target.value = null;
    } else {
      if (file.size > size) {
        err = file.type + "is too large, please pick a smaller file\n";
      }
      if (err !== "") {
        toast.error(err);
        event.target.value = null;
      }
    }

    return true;
  };
  onChangeHandler = event => {
    var file = event.target.files[0];

    if (this.checkMimeType(event) && this.checkFileSize(event)) {
      // if return true allow to setState
      this.setState({
        selectedFile: file,
        loaded: 0
      });
    }
  };

  onClickHandler = () => {
    let filereader = new FileReader();
    filereader.onloadend = e => {
      const content = filereader.result;
      content.replace(/\n/g, "\n\n");
      this.props.sendDataToServer(content);
      toast.success("upload success");
    };

    filereader.readAsText(this.state.selectedFile);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <div className="form-group files">
              <label>Upload Your File </label>
              <input
                type="file"
                className="form-control"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <ToastContainer />
            </div>

            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={this.onClickHandler}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FileUploader;
