import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {loadAllTodos} from "@/lib/redux/slices/todoSlice/todoApi";
import {Todo} from "@/lib/redux";

export const loadAllTodoAsync = createAppAsyncThunk(
    "todo/loadAllTodoAsync",
    async():Promise<Todo[]>=>{
        console.log('load All todo async');
        const response = await loadAllTodos();
        console.log('Response ',response);
        return response;
    });
