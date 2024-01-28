"use client";
import TodoWithReducer from "./TodoWithReducer";
import TodoCount from "./TodoCount";
import React, {useContext, useReducer} from "react";
import TodoContext from './TodoContext';
import TodoStateContext from "./TodoStateContext";
import DispatchContext from "./DispatchContext";
import useCustomReducer from "../hook/useCustomReducer";

function todoReducer(state,action) {
    console.log('State ',state, ' Action ',action);
    switch (action.type)
    {
        case 'ADD_TODO':
            return [...state,action.payload];
        case 'DELETE_TODO':
            return state.filter(todo=>todo.id!=action.payload.id);
        case 'UPDATE_TODO':
            return state.map(todo=>todo.id==action.payload.id?action.payload:todo);
        default:
            return state;
    }

}
export default function ReducerWithContext()
{
    let initial = [
        {
            id:1,
            title: 'Task 1'
        },
        {
            id:2,
            title: 'Task 2'
        },
        {
            id:3,
            title: 'Task 3 data by todo context'
        },
    ]
    //const [todos,dispatch] = useReducer(todoReducer,initial);
    const [todos,dispatch] = useCustomReducer(todoReducer,initial);
    return(<div>
        <TodoStateContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                <TodoWithReducer/>
            </DispatchContext.Provider>

           <TodoCount/>
        </TodoStateContext.Provider>

    </div>);
}