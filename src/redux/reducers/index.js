import { plusMinus } from "./plusMinus";
import { gettingData } from "./getData";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
  plusMinus: plusMinus,
  gettingData: gettingData,
});

// Step 2 - create redux=>reducers=>index.js & ....js niye ekhane bole dite hobe amra ki korbo. amra reducers alada vabe made korle index.js import kore dite hobe & combineReducers call kore action and reducers pack korte hobe.