import { createStore } from "redux";
import { rootReducers } from "./reducers";

export const store = createStore(rootReducers);

// Step 3 - create redux=>store.js; import {createStore} from "redux", import rootReducer from "./reducers" and export store var.
