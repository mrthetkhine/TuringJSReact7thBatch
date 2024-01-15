"use client";
function SecondLevel(props)
{
    console.log('Second level ',props);
    return (<div>
        Second level
        {props.children}
    </div>)
}
export default function FirstLevel(props)
{
    return (<div>
        First level
        <SecondLevel {...props}/>
    </div>);
}