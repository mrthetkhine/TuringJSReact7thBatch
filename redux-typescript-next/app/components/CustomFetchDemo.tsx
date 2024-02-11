"use client";
import useCustomFetch from "@/app/hooks/useCustomFetch";

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
                data.map(item=><div key={item.id}>{item.title}</div>)
            }
        </div>);
    }
    if(error)
    {
        return (<div>Something went wrong</div>)
    }
}