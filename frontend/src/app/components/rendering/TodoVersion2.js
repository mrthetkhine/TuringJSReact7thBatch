"use client"
import  './TodoV2.css'
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

export default function TodoVersion2()
{
    const [todos,setTodos] =useState(initial);
    const addNewTodo=(title)=>
    {
        console.log('AddNew Todo in parent ',title);
        let newTodo = nextTodo(title);
        setTodos([...todos,newTodo]);
    }
    const deleteTodoHandler = (todo)=>{
      console.log('Deletetodo ',todo);
      setTodos(todos.filter(item=>todo.id!= item.id));
    };
    const updateHandler= (todo)=>{
        console.log('Update todo  ',todo);
        setTodos(todos.map(item=>item.id==todo.id?todo:item));
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