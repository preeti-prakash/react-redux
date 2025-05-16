import { createStore } from "redux";
import rootReducer from "./rootReducer";

// store can have only one reducer
// as there are multiple reducers - combined them into one single rootReducer
const store = createStore(rootReducer);

export default store;
