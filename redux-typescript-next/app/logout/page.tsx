"use client";
import {Button} from "@chakra-ui/react";
import React from "react";
import {authSlice, useDispatch} from "@/lib/redux";
import {useRouter} from "next/navigation";

export default function Page()
{
    const router =useRouter();
    const dispatch = useDispatch();
    const btnLogoutHandler = ()=>{
      console.log('Logout');
      dispatch(authSlice.actions.logout());
      router.push('/login')
    };
    return(<div>
        <h1>Logout</h1>
        <Button type="button"
                colorScheme="purple"
                width="full"
                onClick={btnLogoutHandler}>
            Logout
        </Button>
    </div>);
}