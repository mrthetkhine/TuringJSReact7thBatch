"use client";
import {useState} from "react";

export default function DisplayMousePosition({render})
{
    const [pos,setPos] = useState({
        x:0,
        y:0,
    })
    const mouseMoveHandler = (event)=>{
        console.log("X ",event.clientX,"Y ",event.clientY);
        setPos({
            x:event.clientX,
            y:event.clientY
        })
    }
    return (<div onMouseMove={mouseMoveHandler}>
        Container
       {/* <img src={"https://cdn-icons-png.flaticon.com/512/3969/3969773.png"}
             width={20}
             height={20}
             style={{
                position:'absolute',
                top:pos.y,
                left:pos.x
             }
             }/>*/}
        {
            render(pos)
        }
    </div>)
}