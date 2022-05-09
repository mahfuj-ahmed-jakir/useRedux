const initValue = {
  data: "GET_DATA",
  loading: false,
};

export const gettingData = (state = initValue, action) => {
  if (action.type == "GET_DATA") {
    return {
      data: action.payload.data,
      loading: false,
    };
  } else {
    return state;
  }
};
