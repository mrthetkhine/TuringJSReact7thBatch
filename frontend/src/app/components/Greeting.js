"use client";
export default function Greeting({name="Unknown",person})
{
    console.log("Props ",name, "person ",person);
    return (<div>
        <h1> Hello {name}</h1>
    </div>);
}