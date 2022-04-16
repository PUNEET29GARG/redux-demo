// const intialState={
//   count:0
// }
const intialState = 10;

const IncDec = (state = intialState, action) => {
  switch (action.type) {
    case "Increase":
      return state + 10;
    case "Decrease":
      return state - 1;
    default:
      return state;
  }
};

export default IncDec;
