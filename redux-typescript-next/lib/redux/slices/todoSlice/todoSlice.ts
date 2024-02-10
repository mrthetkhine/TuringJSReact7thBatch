
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loadAllTodoAsync} from "@/lib/redux";

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
    /*
    extraReducers: builder => {
        // Use `extraReducers` to handle actions that were generated
        // _outside_ of the slice, such as thunks or in other slices

        builder
            .addCase(loadAllTodoAsync.pending, (state, action) => {
                //state.status = 'loading'
            })
            // Pass the generated action creators to `.addCase()`
            .addCase(loadAllTodoAsync.fulfilled, (state, action) => {
                // Same "mutating" update syntax thanks to Immer
                //state.status = 'succeeded'
                console.log('loadAllTodoAsync.fulfilled ',action.payload);
                state.todos = action.payload
            })

    }*/
});
