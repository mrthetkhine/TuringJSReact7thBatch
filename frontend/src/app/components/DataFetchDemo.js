"use client";
import {useEffect, useState} from "react";

export default function DataFetchDemo()
{
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
        console.log('Run effect');
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(data=>data.json())
            .then(json=>setTodos(json));
            //.then(json=>console.log("Data ",json));

    },[]);
    useEffect(()=>{
        console.log('Second effect');
    });
    console.log('Run render');
    return (<div>
        Data Fetch
        {
            todos.map(todo=><div key={todo.id}>
                {todo.title}
            </div>)
        }
    </div>);
}