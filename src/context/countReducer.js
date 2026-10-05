const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;

    case "decrement":
      return state - action.payload;

    case "reset":
      return 0;

    default:
      return state;
  }
};

export default reducer;
