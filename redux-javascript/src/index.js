import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

//* Action constants key:value pairs
const Action = {
  INIT: "init",
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREMENT_BY_AMOUNT: "incrementByAmount",
};
Object.freeze(Action);

//* create store
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

//* log history
const history = [];

//* reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case Action.INIT:
      return { amount: action.payload };

    case Action.INCREMENT:
      return { amount: state.amount + 1 };

    case Action.DECREMENT:
      return { amount: state.amount - 1 };

    case Action.INCREMENT_BY_AMOUNT:
      return { amount: state.amount + action.payload };

    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case Action.INCREMENT_BY_AMOUNT:
      return { points: state.points + 1 };
    default:
      return state;
  }
}

//* Action creator
const getUser = (id) => {
  return async (dispatch, getState) => {
    const { data } = await axios
      .get(`http://localhost:3000/accounts/${id}`)
      .catch((err) => {
        console.log({ err });
      });
    dispatch(init(data.amount));
  };
};

const init = (value) => ({ type: Action.INIT, payload: value });
const increment = () => ({ type: Action.INCREMENT });
const incrementByAmount = (value) => {
  return { type: Action.INCREMENT_BY_AMOUNT, payload: value };
};

//* dispatch actions
setTimeout(() => {
  store.dispatch(getUser(2));
  // store.dispatch(increment());
  // store.dispatch(incrementByAmount(2));
}, 2000);

//* subscribe(): some changes on store means (on reducers) its fires and run
// store.subscribe(() => {
//   // history.push(store.getState());
//   // console.log(history);
//   // global state
//   console.log(store.getState());
// });
