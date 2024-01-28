"use client";
import {useEffect, useState} from "react";
import useFetch from "./useFetch";
export default function RandomProfile()
{
    const [state,setState] = useState([]);
    useFetch('https://randomuser.me/api/',setState);
    return (<div>
        {
            <h1>
                {
                    state.results && state.results[0].name.first + state.results[0].name.last
                }
            </h1>
        }
    </div>);
}