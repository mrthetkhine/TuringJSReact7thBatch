import React from "react";

export default function CustomContainer({children}: {
    children: React.ReactNode
})
{
    return(<div>
        Render container
        {children}
    </div>);
}