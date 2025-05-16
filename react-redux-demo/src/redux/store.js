import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
// keeps track of state chanegs
import logger from "redux-logger";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store can have only one reducer
// as there are multiple reducers - combined them into one single rootReducer
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
