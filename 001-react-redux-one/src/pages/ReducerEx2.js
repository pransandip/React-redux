import React from 'react'
import { useReducer } from 'react'
import './ReducerEx.css'
import { reducer } from './reducerfile/reducer'

const ReducerEx2 = () => {

    const [state, dispatch] = useReducer(reducer, 0)
    console.log(state)
    return (
        <div>
            <button type='button' onClick={() => dispatch('increment')}>+</button>
            <h1 id='h1State'>{state}</h1>
            <button type='button' onClick={() => dispatch('decrement')}>-</button>
        </div>
    )
}

export default ReducerEx2