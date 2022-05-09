export const plusMinus = (state = 50, action) => {
  if (action.type == "PLUS") {
    return state + 1;
  } else if (action.type == "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};