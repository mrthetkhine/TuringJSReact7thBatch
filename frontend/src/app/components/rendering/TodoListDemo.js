"use client"
import {useState} from "react";

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
        title: 'Task 3'
    },
]
let id= 4;
function nextTodo()
{
    return {
        id,
        title: 'Task '+(id++)
    }
}
export default function TodoListDemo()
{
    const [todos,setTodos] =useState(initial);
    const addHandler =()=>{
        const newTodo = nextTodo();
        console.log('New todo ',newTodo);
        setTodos([...todos,newTodo]);
    }
    const updateHandler= (todo)=>{
        console.log('updateHandler todo ',todo);
        todo.title = todo.title+'Updated';
        setTodos(todos.map(item=> item.id==todo.id?todo:item));
    };
    const deleteHandler= (todo)=>{
        console.log('Delete todo ',todo);
        setTodos(todos.filter(item=>item.id!=todo.id));
    };
    return (<div>
        <button type={"button"}
                onClick={addHandler}>Add</button>
        {
            todos.map(todo=>{
                return <div key={todo.id}>
                    {todo.title}
                    &nbsp;
                    <button type={"button"}
                            onClick={()=>updateHandler(todo)}>
                        Update
                    </button>
                    &nbsp;
                    <button type={"button"}
                        onClick={()=>deleteHandler(todo)}>
                        Delete
                    </button>
                </div>
            })
        }
    </div>);
}