import { combineReducers } from "redux";
//combineReducers được sử dụng để kết hợp nhiều reducer thành một reducer duy nhất.
import {info} from "./infoReduces"

const reducers = combineReducers({
    personalInfo:info
})

export  default (state,action) => reducers(state,action)