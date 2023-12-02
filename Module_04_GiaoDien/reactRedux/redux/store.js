import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; // Đảm bảo đường dẫn đúng

const middlewared = [thunk];

export const stores = createStore(
  rootReducer,
 
)
