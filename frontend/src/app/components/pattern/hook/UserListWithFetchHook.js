"use client";
import useFetch2 from "./useFetch2";
import UserList from "../hoc/UserList";

export default function UserListWithFetchHook()
{
    const {data,loading} = useFetch2('https://jsonplaceholder.typicode.com/users');
    if(loading)
    {
        return <div>Loading ....</div>;
    }
    else
    {
        return <UserList data={data}/>
    }

}