import {Todo} from "@/lib/redux";

export const loadAllTodos = async():Promise<Todo[]>=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let todos = await response.json();
    return todos;
}