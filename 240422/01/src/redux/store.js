import productReducer from "./reducers/productReducer";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const store = createStore(productReducer, applyMiddleware(thunk));

export default store;
