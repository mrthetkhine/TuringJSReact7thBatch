"use client";
import Counter from "../Counter";
import {useState} from "react";
let list = [
    {
        id: 1,
        title:"one"
    },
    {
        id: 2,
        title:"two"
    },
    {
        id: 3,
        title:"three"
    }
]
export default function ChildWithKey()
{

    const [items,setItems] = useState(list);
    const btnUpdateHandler = ()=>{
        //list[0].title ='Update';
        const clone = [...list];
        clone[0].title='update';
        setItems(clone);
    };
    const btnReplaceHandler = ()=>{
        //list[0].title ='Update';
        const clone = [...list];
        clone[2]={
            id: 4,
            title:"Replaced"
        };
        setItems(clone);
    };
    const btnReplace2Handler = ()=>{
        //list[0].title ='Update';
        let clone = [...list];
        const newItem = {
            id: 5,
            title:"new key with 5"
        };
        clone.splice(1,0,newItem);
        setItems(clone);
    };
    console.log('Items ',items);
    return (<div>
        <ol>
            {
                items.map((item,index)=> <li key={item.id}>
                    {item.title}
                    <Counter/>
                </li>)
            }
        </ol>
        <button type={"button"}
                onClick={btnUpdateHandler}>
            Update
        </button>
        <button type={"button"}
                onClick={btnReplaceHandler}>
            Replace
        </button>
        &nbsp;
        <button type={"button"}
                onClick={btnReplace2Handler}>
            Replace2
        </button>
    </div>);
}