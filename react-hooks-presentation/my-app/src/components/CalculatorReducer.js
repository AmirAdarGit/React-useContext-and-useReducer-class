
export const initialState = { count: 0 };
export function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };

        case "DECREMENT":
            return { count: state.count - 1 };

        case "MULTIPLE_BY_2":
            return { count: state.count * 2 };

        case "POWER_BY_2":
            return { count: state.count * state.count };

        case "RESET":
            return  initialState;

        default:
            throw new Error();
    }
}