import { Component } from "react";
import PropTypes from "prop-types";
import { compiler } from "markdown-to-jsx";
import { connect } from "react-redux";
import { addMarkdown, updateMarkdown } from "../actions/index";
import Chart from "./Chart";

class Markdown extends Component {
  options = {
    overrides: {
      Chart: {
        component: Chart
      }
    }
  };

  componentDidMount() {
    this.props.addMarkdown(this.props.text);
  }

  render() {
    return compiler(this.props.text, this.options);
  }
}

Markdown.propTypes = {
  addMarkdown: PropTypes.func.isRequired,
  updateMarkdown: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

const mapStatetoProps = state => ({
  text: state.markdownReducer.text.join("")
});

export default connect(
  mapStatetoProps,
  { addMarkdown, updateMarkdown }
)(Markdown);
