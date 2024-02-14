"use client";
import {useGetAllTodoQuery,useAddTodoMutation} from "@/lib/redux/services/backendApi";
import {useState} from "react";


export default function TodoListWithRTK()
{
    const { data, error, isLoading } = useGetAllTodoQuery();
    const [addTodo, result] = useAddTodoMutation();
    const [title,setTitle] = useState('');
    const onDeleteHandler= ()=>{
        console.log('On delete');
        //deleteUserById(1);
    };
    const btnAddHandler = ()=>{
      console.log('Btn Add ',title);
      addTodo({
          title,
          completed:false,
      });
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
                                onClick={onDeleteHandler}
                                className={"btn btn-primary"}>
                            Delete
                        </button>
                    </div>)
                }
            </>
        ) : null}
    </div>);
}