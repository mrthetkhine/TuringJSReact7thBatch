"use client"
import  './../rendering/TodoV2.css'
import {useReducer, useState} from "react";

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
                onClick={deleteHandler}>Delete</button>
        &nbsp;
        <button type={"button"}
                onClick={editHandler}>
            {editMode?'Update':'Edit'}
        </button>
    </div>;
}

function TodoInput({addNewTodo}) {
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
               onChange={handleChange}/> &nbsp;
        <button type={"button"}
                onClick={addBtnHandler}>Add</button>
    </form>;
}
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

export default function TodoWithReducer()
{
    const [todos,dispatch] = useReducer(todoReducer,initial);
    const addNewTodo=(title)=>
    {
        console.log('AddNew Todo in parent ',title);
        let newTodo = nextTodo(title);
        dispatch({
            type:'ADD_TODO',
            payload : newTodo
        });
    }
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
    return (<div>
        <TodoInput
            addNewTodo={addNewTodo}/>
        <hr/>
        {todos.map(todo => <TodoItem key={todo.id}
                                     onDelete = {deleteTodoHandler}
                                     onUpdate ={updateHandler}
                                     todo={todo}/>)}
    </div>);
}