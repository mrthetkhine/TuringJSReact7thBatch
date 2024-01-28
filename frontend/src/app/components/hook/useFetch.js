import {useEffect, useState} from "react";
export default function useFetch(url,setState)
{
    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(json => setState(json));
    },[])
}