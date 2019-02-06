import createReduxProxy from "react-cosmos-redux-proxy";
import configureStore from "./configureStore";

export default createReduxProxy({
  createStore: initialState => configureStore(initialState)
});
