import {Review} from "@/lib/redux/services/types";
import styles from "@/app/components/Movie/movie.module.css";
import {Button} from "@chakra-ui/react";
import React, {useState} from "react";
import { Rating } from 'react-simple-star-rating'
export default function ReviewUI({
    review,
    onDelete,
                                 }:{
    review:Review,
    onDelete:(review:Review)=>void,
})
{
    const [rating, setRating] = useState(review.rating);

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate);
        console.log('Rating ',rate);
        // other logic
    }
    const onDeleteHandler= ()=>{
        onDelete(review);
    }
    return (<div className={styles.review}>
                <div>
                    <Rating
                        style={{width:'100%'}}
                        onClick={handleRating}
                        initialValue={rating} />

                </div>
        <div >
            <div> {review.review}</div>
            <Button colorScheme='blue' >
                Edit
            </Button>
            &nbsp;
            <Button colorScheme='blue' onClick={onDeleteHandler}>
                Delete
            </Button>
        </div>

    </div>)
}