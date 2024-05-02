import React, { useReducer } from 'react'

export default function UseReduceObj() {
    const intialstate = {
        firstcounter: 0,
        secondcounter: 0,
    }
    const reducer = (state, action) => {
        switch (action) {
            case 'inc': return { ...state, firstcounter: state.firstcounter + 1 };
            case 'dec': return { ...state, firstcounter: state.firstcounter - 1 };
            case 'inc5': return { ...state, secondcounter: state.secondcounter + 5 };
            case 'dec5': return { ...state, secondcounter: state.secondcounter - 5 };
            case 'reset': return intialstate;
            default: return state
        }
    }
    // ...state=>to store the value that has been created alredy
    const [count, dispatch] = useReducer(reducer, intialstate)
    return (
        <div>
            {count.firstcounter}
            <button onClick={() => dispatch('inc')}>Increment</button>
            <button onClick={() => dispatch('dec')}>Decrement</button>
            <br></br>
            {count.secondcounter}
            <button onClick={() => dispatch('inc5')}>Increment5</button>
            <button onClick={() => dispatch('dec5')}>Decrement5</button>
            <br></br>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}
