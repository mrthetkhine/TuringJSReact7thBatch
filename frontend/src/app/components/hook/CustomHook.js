"use client";
import {useEffect, useState} from "react";
import useFetch from "./useFetch";

export default function CustomHook()
{
    const [state,setState] = useState([]);

    useFetch('https://jsonplaceholder.typicode.com/todos',setState);
    return(<div>
        {
            state.map(item=><div key={item.id}>
                {item.title}
            </div>)
        }
    </div>);
}