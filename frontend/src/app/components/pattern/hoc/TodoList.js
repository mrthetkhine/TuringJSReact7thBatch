"use client";
import {useEffect, useState} from "react";

export default function TodoList({data})
{

    return (<div>
        {
            data.map(user=><div key={user.id}>
                {user.title}
            </div>)
        }

    </div>);
}
TodoList.displayName="TodoList";