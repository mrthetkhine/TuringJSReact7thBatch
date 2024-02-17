"use client";
import {useGetAllTodoQuery, useAddTodoMutation, useDeleteTodoMutation} from "@/lib/redux/services/backendApi";
import {useState} from "react";
import {Todo} from "@/lib/redux/services/types";


export default function TodoListWithRTK()
{
    const { data, error, isLoading } = useGetAllTodoQuery(undefined,{
        //pollingInterval: 2000,
    });
    const [addTodo, result] = useAddTodoMutation();
    const [deleteTodo,deleteResult] = useDeleteTodoMutation();
    const [title,setTitle] = useState('');
    const onDeleteHandler= (todo:Todo)=>{
        console.log('On delete');
        deleteTodo(todo._id);
    };
    const btnAddHandler = ()=>{
      console.log('Btn Add ',title);
      addTodo({
          title,
          completed:false,
      }).unwrap()
        .then(data=>console.log('Add ok ',data),(error)=>console.log('Add error',error))  ;
    };
    return (<div>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (
            <>
                <input type={"text"}
                       value={title}
                       onChange={(event)=>setTitle(event.target.value)}/>
                &nbsp;
                <button type={"button"}
                         className={"btn btn-primary"}
                         onClick={btnAddHandler}
                        >
                    Add
                </button>
                {
                    data.map(todo=><div key={todo._id}>
                        {todo.title}
                        &nbsp;
                        <button type={"button"}
                                onClick={(event)=>onDeleteHandler(todo)}
                                className={"btn btn-primary"}>
                            Delete
                        </button>
                    </div>)
                }
            </>
        ) : null}
    </div>);
}