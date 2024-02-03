"use client";
import {useState} from "react";

export default function FormikRenderProperty({initialValue,children})
{
    //console.log('Children ',children);
    const [state,setState] = useState(initialValue);
    const handler = (name)=> {
        return function (event) {
            setState({
                ...state,
                [name]: event.target.value
            })
        }
    }
    const onSubmitHandler = (event)=>{
      console.log('State ', state);
      event.preventDefault();
    };
        const component = children({state,handler});
        console.log('Component ',component);
        return(<div>
        Demo
        {
            children({
                state,
                handler,
                onSubmit:onSubmitHandler
            })
        }
    </div>);
}