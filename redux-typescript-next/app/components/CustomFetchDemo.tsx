"use client";
import useCustomFetch from "@/app/hooks/useCustomFetch";
import {Todo} from "@/lib/redux/services/types";

export default function CustomFetchDemo()
{
    const {loading,data,error} = useCustomFetch('https://jsonplaceholder.typicode.com/todos');
    if(loading)
    {
        return (<h2>Loading...</h2>);
    }
    if(data)
    {
        return(<div>
            {
                data.map((item:any)=><div key={item.id}>{item.title}</div>)
            }
        </div>);
    }
    if(error)
    {
        return (<div>Something went wrong</div>)
    }
}