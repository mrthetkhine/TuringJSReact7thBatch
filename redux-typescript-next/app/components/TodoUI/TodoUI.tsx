"use client";
import {counterSlice, loadAllTodoAsync, selectTodo, Todo, todoSlice, useDispatch, useSelector} from "@/lib/redux";
import {useEffect} from "react";

let id = 4;
function nextTodo()
{
    return {
        id: id,
        "userId": 1,
        "title": "Todo "+id++,
        "completed": false
    }
}
export default function TodoUI()
{
    const dispatch = useDispatch();
    const todo = useSelector(selectTodo);

    useEffect(()=>{
        dispatch(loadAllTodoAsync());
    },[]);
    const addTodoHandler = ()=>{
        const newTodo = nextTodo();
        dispatch(todoSlice.actions.addTodo(newTodo));
        //dispatch(loadAllTodoAsync());
    }
    const deleteTodoHandler = (todo:Todo)=>{
        dispatch(todoSlice.actions.deleteTodo(todo));
    }
    const updateTodoHandler= (todo:Todo)=>{
        const updateTodo = {
            ...todo
        }
        updateTodo.title = 'Todo update '+todo.id;
        dispatch(todoSlice.actions.updateTodo(updateTodo));
    }
    return (<div>
        <button type={"button"}
                onClick={addTodoHandler}
                className={"btn btn-primary"}>
            Add
        </button>
        {
            todo.todos.map((item)=>(
                <div key={item.id}>
                    {item.title}
                    <button
                        onClick={()=>updateTodoHandler(item)}
                        type={"button"}
                        className={"btn btn-primary"}>
                        Update
                    </button>
                    &nbsp;
                    <button
                        onClick={()=>deleteTodoHandler(item)}
                        type={"button"}
                        className={"btn btn-danger"}>
                        Delete
                    </button>
                </div>
                )

            )
        }
    </div>);
}