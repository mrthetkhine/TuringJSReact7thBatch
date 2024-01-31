"use client";
import {useDeferredValue, useMemo, useState} from "react";
const largeList = [
    {
        id:1,
        name:'Apple'
    },
    {
        id:2,
        name:'Alpha'
    },
    {
        id:3,
        name:'Banna'
    },
    {
        id:4,
        name:'Beta'
    },
    {
        id:5,
        name:'Cup'
    },
];
export default function DefferedValueDemo()
{
    const [name, setName] = useState("");
    const deferredName= useDeferredValue(name);
    const list = useMemo(() => {
        let now = performance.now();
        while(performance.now()-now < 1500)
        {
            //1 second idle loop
        }
        console.log('delay list');
        return largeList.filter(item => item.name.includes(deferredName));
    }, [deferredName])

    function handleChange(e) {
        setName(e.target.value)
    }
    console.log('Render');
    return (
        <>
            <input type="text" value={name} onChange={handleChange} />
            <ul>
            {
                list.map(item => (
                    <li key={item.id}  >{item.name}</li>
            ))}
            </ul>
        </>
    )
}