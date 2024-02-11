"use client";
import {useReducer} from "react";

interface State {
    count: number
};
//type CounterActionType = "reset" | "setCount";
type CounterAction =
    | { type: "reset" }
    | {
        type: "setCount";
        value: State["count"]
        }

const initialState: State = { count: 0 };
function stateReducer(state: State, action: CounterAction): State {
    switch (action.type) {
        case "reset":
            return initialState;
        case "setCount":
            return { ...state, count: action.value };
        default:
            throw new Error("Unknown action");
    }
}
export default function CounterWithReducer()
{
    const [state, dispatch] = useReducer(stateReducer, initialState);

    const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
    const reset = () => dispatch({ type: "reset" });

    return (
        <div>
            <h1>Welcome to my counter</h1>

            <p>Count: {state.count}</p>
            <button onClick={addFive}>Add 5</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}