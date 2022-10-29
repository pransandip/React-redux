import changeTheNumber from "./counter/counter";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    changeTheNumber: changeTheNumber
})

export default RootReducer