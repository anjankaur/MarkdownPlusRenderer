import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const initialState = { markdownReducer: { text: [] } };
const store = createStore(rootReducer, initialState);
export default store;
