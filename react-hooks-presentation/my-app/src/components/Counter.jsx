import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function increment() {
        dispatch({ type: "INCREMENT" });
    }

    function decrement() {
        dispatch({ type: "DECREMENT" });
    }

    return (
        <div>
            <h2>Counter</h2>
            <p>{state.count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

