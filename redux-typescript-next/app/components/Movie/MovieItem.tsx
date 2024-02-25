import { Button, ButtonGroup } from '@chakra-ui/react';
import {Movie} from "@/lib/redux/services/types";

import styles from './movie.module.css';
import {useRouter} from "next/navigation";
import MovieUI from "@/app/components/Movie/MovieUI";
export default function MovieItem({
                                    movie,
                                    onDelete,
                                    onEdit,
                                    }:{
                                    movie:Movie,
                                    onDelete:(movie:Movie)=>void,
                                    onEdit:(movie:Movie)=>void,
                                })
{
    const router = useRouter();
    const deleteHandler=()=>{
        onDelete(movie);
    };
    const editHandler =()=>{
        onEdit(movie);
    };
    const onDetailHandler =()=>{
        console.log('OnDetails ',movie);
        router.push(`/movies/${movie._id}`);
    };

    return (<div className={styles.movie}>
       <MovieUI movie={movie}/>
        <div>
            <Button colorScheme='blue'
                    onClick={editHandler}>Edit</Button>
            &nbsp;
            <Button colorScheme='blue'
                    onClick={deleteHandler}>Delete</Button>
            &nbsp;
            <Button colorScheme='blue'
                    onClick={onDetailHandler}>Details</Button>
        </div>
    </div>);
}