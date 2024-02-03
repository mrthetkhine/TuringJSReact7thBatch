import {useEffect, useState,useDebugValue} from "react";

export default function useFetch2(url)
{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    useDebugValue('useFetch2');

    useEffect(()=>{
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false);
            });
    },[])
    return {
        data,
        loading
    };
}