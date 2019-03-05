import React, { Component } from "react";

import { Bar, Line, Pie, Doughnut, Radar, Scatter } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    let parsedProps = {};
    if (!Array.isArray(props.children)) {
      parsedProps = JSON.parse(props.children);
    } else parsedProps = JSON.parse(props.children[0]);
    this.id = parsedProps["id"];
    this.state = {
      type: parsedProps["type"],
      data: parsedProps["data"],
      options: parsedProps["options"]
    };
  }

  /**
   * possible chart types available
   */
  renderAs = {
    bar: Bar,
    line: Line,
    pie: Pie,
    doughnut: Doughnut,
    radar: Radar,
    scatter: Scatter
  };

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };

  render() {
    const $component = this.renderAs[this.state.type.toLowerCase()];

    return (
      <div id={"Chart_" + this.id}>
        <$component data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default Chart;

//TODO use chart with store as well
