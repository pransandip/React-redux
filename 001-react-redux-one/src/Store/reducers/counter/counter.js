import { ACTIONS } from "../../actions";

const initialState = 10;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return state + action.payload;
    case ACTIONS.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
export default changeTheNumber;
