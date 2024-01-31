"use client"
import  './../rendering/TodoV2.css'
import {useContext, useReducer, useState} from "react";
import TodoContext from "./TodoContext";
import TodoStateContext from "./TodoStateContext";
import DispatchContext from "./DispatchContext";


let id= 4;
function nextTodo(title)
{
    return {
        id:id++,
        title: title
    }
}

function TodoItem({todo,onDelete,onUpdate}) {
    const [editMode,setEditMode] = useState(false);
    const [editTitle,setEditTitle] = useState(todo.title);
    const deleteHandler = ()=>{
        onDelete(todo);
    }
    const editHandler = ()=>{
        console.log('Edit ');

        if(editMode==true)
        {
            console.log('Updated ',editTitle);
            const updatedTodo = {...todo,title:editTitle};
            onUpdate(updatedTodo);
        }

        setEditMode(!editMode);
    };
    const changeHandler =(e)=>{
        setEditTitle(e.target.value);
    };
    return <div className={'todo-item'}>
        {
            editMode?
                <input type={"text"}
                       value={editTitle}
                       onChange={changeHandler}/>
                :todo.title
        }
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={deleteHandler}>Delete</button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={editHandler}>
            {editMode?'Update':'Edit'}
        </button>
    </div>;
}

function TodoInput() {
    const dispatch = useContext(DispatchContext);
    const addNewTodo=(title)=>
    {
        console.log('AddNew Todo in parent ',title);
        let newTodo = nextTodo(title);
        dispatch({
            type:'ADD_TODO',
            payload : newTodo
        });
    }
    const [todoText,setTodoText] = useState('');
    const handleChange=(e)=>{
        setTodoText(e.target.value);
    }
    const addBtnHandler = ()=>{
        addNewTodo(todoText);
        setTodoText('');
    };
    return <form>
        New todo &nbsp;
        <input type={"text"}
               value={todoText}
               className={"form-control"}
               onChange={handleChange}/> &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={addBtnHandler}>Add</button>
    </form>;
}

function Filter()
{
    const dispatch = useContext(DispatchContext);
    const [filter,setFilter] = useState('');
    const changeHandler = (event)=>{
        setFilter(event.target.value);
        dispatch({
            type:'ADD_FILTER',
            payload : event.target.value
        });
    }

    return (<div>
        Filter
        <input type={"text"}
                value={filter}
               className={"form-control"}
               onChange={changeHandler}
              /> &nbsp;
    </div>)
}
export default function TodoWithReducer()
{

    const todos = useContext(TodoStateContext);
    const dispatch = useContext(DispatchContext);

    const deleteTodoHandler = (todo)=>{
        console.log('Deletetodo ',todo);
        dispatch({
            type:'DELETE_TODO',
            payload : todo
        })
    };
    const updateHandler= (todo)=>{
        console.log('Update todo  ',todo);
        dispatch({
            type:'UPDATE_TODO',
            payload : todo
        })
    }
    let items= todos.items.filter(item=>item.title.startsWith(todos.filter));
    return (<div>
        <TodoInput
           />
        <hr/>
        <Filter/>
        {items.map(todo => <TodoItem key={todo.id}
                                     onDelete = {deleteTodoHandler}
                                     onUpdate ={updateHandler}
                                     todo={todo}/>)}
    </div>);
}