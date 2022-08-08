import { useReducer } from 'react';
import './ReducerEx.css'

// reducer it's a pure function its takes state and a action
const initialState = {
    first$Number: 0,
    second$Number: 1,
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment': return {...state, first$Number: state.first$Number + action.value};
        case 'decrement': return {...state, first$Number: state.first$Number - action.value};
        case 'increment 5': return {...state, first$Number: state.first$Number + action.value};
        case 'decrement 5': return {...state, first$Number: state.first$Number - action.value};
        case 'increment2': return {...state, second$Number: state.second$Number + action.value};
        case 'decrement2': return {...state, second$Number: state.second$Number - action.value};
        case 'reset': return initialState;
    }
}

const ReducerEx3 = () => {

    // Define useReducer Hook itr will take reducer function and a initial state
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state)
    return (
        <div>
            <h1 id='h1State'>{state.first$Number}</h1>
            <h1 id='h1State'>{state.second$Number}</h1><br />
            <button type='button' onClick={() => dispatch({ type: "increment", value: 1 })}>INCREMENT</button><span> </span>
            <button type='button' onClick={() => dispatch({ type: "decrement", value: 1  })}>DECREMENT</button><span> </span>
            <button type='button' onClick={() => dispatch({ type: "increment 5", value: 5  })}>INCREMENT 5</button><span> </span>
            <button type='button' onClick={() => dispatch({ type: "decrement 5", value: 5  })}>DECREMENT 5</button><span> </span>
            <button type='button' onClick={() => dispatch({ type: "increment2", value: 5  })}>2ND COUNTER +</button><span> </span>
            <button type='button' onClick={() => dispatch({ type: "decrement2", value: 5  })}>2ND COUNTER -</button><span> </span>
            <button type='button' onClick={() => dispatch({ type: "reset" })}>RESET</button>
        </div>
    )
}

export default ReducerEx3