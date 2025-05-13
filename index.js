const { createStore } = require("redux");

const BUY_CAKE = "BUY_CAKE";

// Action creator - function that returns an action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
}

// Initial state
const initialState = {
  numOfCakes: 10,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

// Log initial state
console.log("Initial state:", store.getState());

// Subscribe to store updates
const unsubscribe = store.subscribe(() =>
  console.log("Updated state:", store.getState())
);

// Dispatch actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// Unsubscribe from store
unsubscribe();
