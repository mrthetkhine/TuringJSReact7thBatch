"use client"

import {useState,useReducer} from "react";

const initialState = {
    counter :0
};
function counterReducer(state,action)
{
    console.log('State ',state, " Action ",action);
    switch(action.type)
    {
        case "INC":
            return {
                counter: state.counter+1
            };
        case 'DEC':
            return {
                counter: state.counter-1
            }
        default:
            return state;
    }
}
export default function CounterWithReducer()
{
    const [state,dispatch] = useReducer(counterReducer,initialState);
    const incHandler= ()=>{
        dispatch({
            type:"INC"
        })
    };
    const decHandler= ()=>{
        dispatch({
            type:"DEC"
        })
    };
    return(<div>

        <button type={"button"}
            onClick={incHandler}>+</button>
        Counter {state.counter}
        <button type={"button"}
            onClick={decHandler}>-</button>
    </div>);
}