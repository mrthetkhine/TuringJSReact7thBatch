"use client";
import { useImmer } from 'use-immer';
import {useState} from "react";

export default function EqualityDemo()
{
    /*
    const [state,setState] = useState({
        name : "TK",
        address: {
            city: "ygn"
        }
    });

     */
    const [state,setState] = useImmer({
        name : "TK",
        address: {
            city: "ygn"
        }
    });
    const handler = ()=>{
        //setState(new String('hello'));

        setState(state=>{
            state.address.city="Somewhere";
        });
    }
    console.log('Render');
    return (<div>
        {state.address.city}
        <button type={"button"}
                onClick={handler}>
            Change
        </button>
    </div>);
}