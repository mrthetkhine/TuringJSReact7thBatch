import {selectAuth, useSelector} from "@/lib/redux";

export default function useAuth()
{
    const auth = useSelector(selectAuth);
    return auth.token ;
}