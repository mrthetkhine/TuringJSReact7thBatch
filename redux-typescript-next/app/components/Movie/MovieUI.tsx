import { Button, ButtonGroup } from '@chakra-ui/react';
import {Movie} from "@/lib/redux/services/types";

import styles from './movie.module.css';
export default function MovieUI({
                                    movie,
                                    onDelete,
                                    }:{
                                    movie:Movie,
                                    onDelete:(movie:Movie)=>void
                                })
{
    const deleteHandler=()=>{
        onDelete(movie);
    }
    return (<div className={styles.movie}>
       <div className={styles.header}>
           {movie.title}
       </div>
       <div>
           {movie.year}
       </div>
        <div>
            Director {movie.director.name}
            <br/>
            Phone no{movie.director.phoneNo}
        </div>
        <div>
            <Button colorScheme='blue'>Edit</Button>
            &nbsp;
            <Button colorScheme='blue'
                    onClick={deleteHandler}>Delete</Button>
            &nbsp;
            <Button colorScheme='blue'>Details</Button>
        </div>
    </div>);
}