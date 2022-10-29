import { useReducer } from 'react';
import './ReducerEx.css'

// reducer it's a pure function its takes state and a action
const initialState = 0;
const reducer = (state, action) => {
    if (action.type === 'INCREMENT') return state + 1;
    if (action.type === 'DECREMENT') return state - 1;
}

const ReducerEx = () => {

    // Define useReducer Hook itr will take reducer function and a initial state
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state)
    return (
        <div>
            <button type='button' onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <h1 id='h1State'>{state}</h1>
            <button type='button' onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </div>
    )
}

export default ReducerEx