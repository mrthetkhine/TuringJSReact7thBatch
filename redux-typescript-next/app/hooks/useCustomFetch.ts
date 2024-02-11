import {useState} from "react";

export default function useCustomFetch(url)
{
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);

    fetch(url)
        .then(resp =>resp.json())
        .then(json=>{
            setData(json);
            setLoading(false);
        },(error)=>{
            //console.log('Error case');
            setLoading(false);
            setError(error)
        });
    return {loading,data,error};
}