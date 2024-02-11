
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadAllTodoAsync} from "./thunks";

export interface Todo {
    "userId": number;
    "id": number;
    "title": string;
    "completed": boolean;
}
export interface TodoList{
    todos: Array<Todo>;
}
const initialState: TodoList = {
   todos:[
       {
           "userId": 1,
           "id": 1,
           "title": "delectus aut autem",
           "completed": false
       },
       {
           "userId": 1,
           "id": 2,
           "title": "quis ut nam facilis et officia qui",
           "completed": false
       },
       {
           "userId": 1,
           "id": 3,
           "title": "fugiat veniam minus",
           "completed": false
       }
   ]
};
//console.log('loadAllTodoAsync ',loadAllTodoAsync);
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo:(state, action: PayloadAction<Todo>)=>{
            state.todos.push(action.payload);
        },
        deleteTodo:(state, action: PayloadAction<Todo>)=>{
            state.todos = state.todos.filter(item=>item.id!=action.payload.id);
        },
        updateTodo:(state, action: PayloadAction<Todo>)=>{
            state.todos = state.todos.map(item=>item.id==action.payload.id?action.payload:item);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAllTodoAsync.pending, (state) => {
                //state.status = "loading";
                console.log('loadAllTodoAsync.pending');
            })
            .addCase(loadAllTodoAsync.fulfilled, (state, action) => {
                //state.status = "idle";
                console.log('fulfilled ',action);
                state.todos = action.payload;
            });
    },
});
