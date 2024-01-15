"use client";
function Button({onClick})
{
    return (<button type={"button"}
                    onClick={onClick}
                >Click me</button>);
}
export default function EventDemo()
{
    const clickHandler= (event)=>{
      console.log('Click ',event);
      event.stopPropagation();
    };
    const divClickHandler= (event)=>{
        console.log('divClickHandler ',event);
    };
    return (<div onClick={divClickHandler}>
        Div
        <Button onClick={clickHandler}/>
    </div>);
}