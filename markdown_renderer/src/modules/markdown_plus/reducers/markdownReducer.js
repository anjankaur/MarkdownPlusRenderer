import _ from "lodash";
const markdownReducer = (state = { text: [] }, action) => {
  switch (action.type) {
    case "UPDATE":
      let newTextMap = state.text;
      if (newTextMap[0] === "") {
        newTextMap.splice(0, 1);
      }
      _.forOwn(action.updateChartMap, function(value, key) {
        newTextMap[key] = value;
      });

      return {
        ...state,
        text: newTextMap.concat(action.payload)
      };
    case "ADD":
      newTextMap = state.text;
      return {
        ...state,
        text: newTextMap.concat(action.payload)
      };
    case "RESET":
      return {
        ...state,
        text: []
      };

    default:
      return state;
  }
};

export default markdownReducer;
