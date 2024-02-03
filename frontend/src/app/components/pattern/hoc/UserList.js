"use client";
import {useEffect, useState} from "react";

export default function UserList({data})
{
    return (<div>
        {
            data.map(user => <div key={user.id}>
                Name {user.name}
            </div>)
        }
    </div>);
}
