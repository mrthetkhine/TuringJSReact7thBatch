import React, {useEffect} from 'react';

import {selectAuth, useSelector} from "@/lib/redux";
import {useRouter} from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation';
function IsAuth<T>(Component: React.ComponentType<T>) {
    return (props: T) => {

        const router = useRouter();
        const auth = useSelector(selectAuth);
        let login = auth.token;
        const pathname = usePathname();

        console.log('Path name ',pathname);
        useEffect(()=>{
            if (!login) {
                router.push('/login?redirectUrl='+pathname);
            }
        },[]);


        return (
            <>
                <Component {...props!} />
            </>
        );
    };
}

export default IsAuth;