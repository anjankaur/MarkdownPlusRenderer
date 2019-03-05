import React from "react";
import ReactDOM from "react-dom";
import MarkdownPlus from "./components/MarkdownPlus";
import Chart from "./components/Chart";
import store from "./store";
import _ from "lodash";
import { RESET_ACTION } from "./actions";

/**
 * MarkdownPlusRenderer class is the main class that takes care of the parsing logic
 * and calls components Markdown and Chart
 */
class MarkdownPlusRenderer {
  constructor(target_div_id, markdown_text) {
    // Reset state of store when MarkdownPlusRenderer is created, can change depending upon requirements
    store.dispatch(RESET_ACTION);

    //find the div with the given id
    let div = document.getElementById(target_div_id);
    this.elements = [];
    this.chartMap = {};
    //create div if does not exist
    if (div == null) {
      ReactDOM.render(
        <div id={target_div_id} />,
        document.getElementById("root")
      );
      div = document.getElementById(target_div_id);
    }
    this.parseMarkdownText(markdown_text, this.elements, this.chartMap);
    this.markdown_element = ReactDOM.render(<MarkdownPlus />, div);

    _.forEach(this.elements, function(text) {
      store.dispatch({ type: "ADD", payload: text }); //dispatch action to store to add text
    });
  }

  /**
   * API to parse incoming text & recognize charts. It also checks if a chart with same existed before
   */
  parseMarkdownText = (text, ele, toUpdateCharts) => {
    let startTag = "<Chart>";
    let endTag = "</Chart>";
    let sIndex = text.indexOf(startTag);
    let eIndex = 0;
    if (sIndex < 0) {
      ele.push(text);
    }

    while (sIndex > -1) {
      ele.push(text.substring(eIndex, sIndex));
      eIndex = text.indexOf(endTag, sIndex);
      if (eIndex > -1) {
        let str = text.substring(sIndex + startTag.length, eIndex); //Found chart
        let chart = JSON.parse(str);
        if (this.checkIfChartExists("Chart_" + chart.id)) {
          //check if chart with same id already exists
          toUpdateCharts["Chart_" + chart.id] = str;
        } else {
          //add new chart
          ele.push("<Chart>" + str + "</Chart>");
          this.chartMap["Chart_" + chart.id] = ele.length - 1;
        }
      }
      sIndex = text.indexOf(startTag, eIndex + endTag.length);
      eIndex = eIndex + endTag.length;
      if (sIndex < 0) {
        ele.push(text.substring(eIndex, text.length()));
      }
    }
  };

  /**
   * API to update the markdown text
   * */
  update = text => {
    let ele = [];
    let trackChart = {};
    this.parseMarkdownText(text, ele, trackChart);

    _.forEach(ele, function(text) {
      store.dispatch({
        type: "UPDATE",
        payload: text,
        updateChartMap: trackChart
      });
    });
    this.updateCharts(trackChart);
  };

  updateCharts = chartMap => {
    _.forOwn(chartMap, (value, key) => {
      ReactDOM.render(<Chart>{value}</Chart>, document.getElementById(key));
    });
  };

  checkIfChartExists = id => {
    if (this.chartMap.hasOwnProperty(id)) return true;
    else return false;
  };
}

export default MarkdownPlusRenderer;
