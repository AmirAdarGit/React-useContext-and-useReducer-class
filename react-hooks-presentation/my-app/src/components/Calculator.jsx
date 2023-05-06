import React, { useReducer } from 'react';
import { initialState, reducer } from "./CalculatorReducer";

export function Calculator() {
    const [state, dispatch] = useReducer(reducer, initialState);


    // Actions:
    function increment() {
        dispatch({ type: "INCREMENT" });
    }

    function decrement() {
        dispatch({ type: "DECREMENT" });
    }
    function multipleBy2() {
        dispatch({ type: "MULTIPLE_BY_2" });
    }
    function powerBy2() {
        dispatch({ type: "POWER_BY_2" });
    }
    function reset() {
        dispatch({ type: "RESET" });
    }

    return (
        <div>
            <h2>Calculator</h2>
            <p>{state.count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={multipleBy2}>power by 2</button>
            <button onClick={powerBy2}>multiple by 2</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

