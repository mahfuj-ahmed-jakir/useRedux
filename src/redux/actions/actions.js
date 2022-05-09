export const plus = () => {
  return {
    type: "PLUS",
  };
};

export const minus = () => {
  return {
    type: "MINUS",
  };
};

export const getData = (data) => {
  return {
    type: "GET_DATA",
    payload: {
      getData: data,
    },
  };
};

// Step 1 - create redux=>action=>action.js; action amader bole dite hobe ki korbo. ekhane amra index.js and actions.js 2ti file niye kaj korte pari.