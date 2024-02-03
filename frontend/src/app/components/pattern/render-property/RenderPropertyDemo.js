"use client";
import DisplayMousePosition from "./DisplayMousePosition";

export default function RenderPropertyDemo()
{
    return (<div>
        Render Property
        <DisplayMousePosition
            render={(pos)=>{
                return <img src={"https://cdn-icons-png.flaticon.com/512/3969/3969773.png"}
                            width={20}
                            height={20}
                            style={{
                                position:'absolute',
                                top:pos.y,
                                left:pos.x
                            }
                            }/>
            }
            }
            />
    </div>);
}