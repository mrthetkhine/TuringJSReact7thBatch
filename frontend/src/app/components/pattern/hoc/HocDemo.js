"use client";
import UserList from "./UserList";
import withLoader from "./withLoader";
import TodoList from "./TodoList";
import withLogger from "./withLogger";
function CustomLoader()
{
    return <div>
        <h1>Loading with custom loader...</h1>
    </div>
}
const UserListHoc = withLoader(UserList,'https://jsonplaceholder.typicode.com/users');
const TodoListHoc = withLoader(withLogger(TodoList),'https://jsonplaceholder.typicode.com/todos',CustomLoader );
export default function HocDemo()
{
    return (<div>
       {/* <UserListHoc/>*/}
        <TodoListHoc/>
    </div>);
}