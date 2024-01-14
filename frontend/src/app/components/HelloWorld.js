"use client";
import "./HelloWorld.css";
import React from "react";
export function Another()
{
    return (<div>
        Another
    </div>);
}
export default function HelloWorld()
{
    let vdom =React.createElement("div", null,React.createElement("h3", null, "Content by Virtual DOM"));
    console.log('virtual dom node ',vdom);

    return(
        <div>
        <h1>Hello World</h1>
        {vdom}
        {'hello'.toUpperCase()}
            <Another/>
        <hr/>
        <img
            className={"profile"}
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    </div>);

}