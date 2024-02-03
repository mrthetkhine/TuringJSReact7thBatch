import {useEffect, useState} from "react";
import EmptyLoader from "next/dist/build/webpack/loaders/empty-loader";

export default function withLoader(Element,url,Loader,)
{
    return (props)=> {
        const [state, setState] = useState(null);
        useEffect(() => {
            fetch(url)
                .then(resp => resp.json())
                .then(json => setState(json))
        }, []);
       if(state==null && Loader == undefined)
       {
           return <div>loading...</div>;
       }
       else if (state==null)
       {
           return <Loader/>
       }
       else
       {
           return <Element {...props} data={state}/>
       }
    }
}