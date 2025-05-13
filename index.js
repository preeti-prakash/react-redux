const { createStore } = require("redux");

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
// Action creator - function that returns an action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Second Redux action",
  };
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 20,
//   };

// Initial state
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIcecreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };
//     default:
//       return state;
//   }
// };
// Reducer
const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
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
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// Unsubscribe from store
unsubscribe();
