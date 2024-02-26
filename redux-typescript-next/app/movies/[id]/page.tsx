"use client";
import {Metadata} from "next";

import {movieApi, useDeleteMovieMutation, useGetAllMovieQuery} from "@/lib/redux/services/movieApi";
import MovieUI from "@/app/components/Movie/MovieUI";
import {Movie, Review} from "@/lib/redux/services/types";
import ReviewUI from "@/app/components/Movie/ReviewUI";
import styles from "@/app/components/Movie/movie.module.css";
import {Button, useDisclosure} from "@chakra-ui/react";
import React from "react";
import ReviewFormDialog from "@/app/movies/[id]/ReviewFormDialog";
import CustomConfirmDialog from "@/app/components/CustomConfirmDialog";
import {useGetAllReviewByMovieIdQuery, reviewApi, useDeleteReviewMutation} from "@/lib/redux/services/reviewApi";

let reviews:Array<Review>=[

]
export default function Page({ params }: { params: { id: string } }) {
    //console.log('ReviewAPI endpoint ',reviewApi.endpoints);
    const { movie} = useGetAllMovieQuery(undefined, {
        selectFromResult: (result) => {
            //console.log('Result ',result);
            const movie = result.data.filter(movie=>movie._id == params.id)[0];
            return {movie};
        },
    });

    const { data=[], error, isLoading } = useGetAllReviewByMovieIdQuery(params.id);
    const [deleteReviewApi,deleteReviewResult] = useDeleteReviewMutation();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const confirmDialog = React.useRef(null);
    const reviewToDelete = React.useRef(null);
    //console.log('Movie ',movie);
    const newBtnHandler =()=>{
        console.log('New review handler');
        onOpen();
    };
    const onDeleteConfirm = ()=>{
        console.log('OnDelete Confirm ',reviewToDelete.current);
        let reviewJson:any = {
            ...reviewToDelete.current,
            movie :reviewToDelete.current.movie._id
        };
        console.log('Review JSON ',reviewJson);
        deleteReviewApi(reviewJson)
            .unwrap()
            .then(data=>{
                console.log('Delete success ',data);
            },error=>{
                console.log('Delete error');
            });
    };
    const onDelete= (review:Review)=>{
        console.log('OnDelete Click ',review);
        console.log('Dialog ',confirmDialog);
        reviewToDelete.current = review;
        confirmDialog.current.open();
    }
  return (
    <>
        <div className={styles.movie}>

            <MovieUI movie={movie}/>
        </div>
        <CustomConfirmDialog
            ref={confirmDialog}
            title={'Delete review'}
            message={'Are you sure you want to delete review'}
            onConfirm={onDeleteConfirm}
        />
        <ReviewFormDialog
            isOpen={isOpen}
            onClose={onClose}/>
        <div>
            <Button colorScheme='blue' onClick={newBtnHandler}>
                New Review
            </Button>
        </div>
      <div>
          {
              data.map((review)=><ReviewUI
                                                    onDelete={onDelete}
                                                    key={review._id}
                                                    review={review}/>)
          }
      </div>
    </>
  );
}

