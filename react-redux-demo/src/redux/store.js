import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
// keeps track of state chanegs
import logger from "redux-logger";

// store can have only one reducer
// as there are multiple reducers - combined them into one single rootReducer
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
