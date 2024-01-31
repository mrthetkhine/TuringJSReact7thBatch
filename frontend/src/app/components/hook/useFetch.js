import {useEffect, useState,useDebugValue} from "react";

export default function useFetch(url,setState)
{
    useDebugValue('CustomHookUseFetch');
    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(json => setState(json));
    },[])
}