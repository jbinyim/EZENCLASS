const initialState = {
  count: 0,
  id: "",
  pw: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREASE":
      return { ...state, count: state.count + action.payload.mnum };
    case "LOGIN":
      return { ...state, id: action.payload.id, pw: action.payload.pw };

    default:
      return { ...state };
  }
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + action.payload.num };
  // } else if (action.type === "LOGIN") {
  // }
  // return { ...state };
};

export default reducer;
