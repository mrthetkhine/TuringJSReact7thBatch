'use client';
import {Metadata} from "next";
import React, {useRef, useState} from "react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ButtonGroup, useDisclosure} from '@chakra-ui/react'

import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack,
    FormErrorMessage
} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { useFormik } from "formik";

import {Movie} from "@/lib/redux/services/types";

import styles from './movie.module.css';
import {useGetUserByIdQuery} from "@/lib/redux/services/users";
import {
    useAddMovieMutation,
    useDeleteMovieMutation,
    useEditMovieMutation,
    useGetAllMovieQuery
} from "@/lib/redux/services/movieApi";
import {useDeleteTodoMutation} from "@/lib/redux/services/backendApi";
import ConfirmDialog from "@/app/components/ConfirmDialog";
import CustomConfirmDialog from "@/app/components/CustomConfirmDialog";
import MovieFormDialog from "@/app/movies/MovieFormDialog";
import MovieItem from "@/app/components/Movie/MovieItem";
console.log('styles ',styles);

const movies:Array<Movie> = [

]
export default function MoviePage() {
    const { data, error, isLoading } = useGetAllMovieQuery();
    const [addMovieApi,addMovieResult] = useAddMovieMutation();
    const [deleteMovieApi,deleteMovieResult] = useDeleteMovieMutation();
    const [editMovieApi,editMovieResult] = useEditMovieMutation();

    const movieToDelete = useRef(null);
    const [movieToEdit,setMovieToEdit] = useState(null);
    const confirmDialog = React.useRef(null);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnCloseHandler =()=>{
        onClose();
        console.log('Close modal handler ',isOpen);
    };
    const addMovie = (movie:Movie)=>{
        addMovieApi(movie)
            .unwrap()
            .then(data=>{
                onClose();
            },error=>{
                console.log('Error in saving movie ',error);
            });
    };
    const editMovie = (movie:Movie)=>{
        movie._id = movieToEdit._id;
        movie.director._id= movieToEdit.director._id;
        console.log('EditMovie call api ',movie);
        editMovieApi(movie)
            .unwrap()
            .then(data=>{
                console.log('Edit success ',data);
                onClose();
            },error=>{
                console.log('Edit error ',error);
            })
    };
    const onDeleteConfirm = ()=>{
        console.log('OnDelete Confirm ',movieToDelete.current);

        deleteMovieApi(movieToDelete.current._id)
            .unwrap()
            .then(data=>{
                console.log('Delete success ',data);
            },error=>{
                console.log('Delete error');
            });
    };

    const onDelete= (movie:Movie)=>{
        console.log('OnDelete Click ',movie);
        console.log('Dialog ',confirmDialog);
        movieToDelete.current= movie;
        confirmDialog.current.open();
    }
    const newBtnHandler =()=>{
        setMovieToEdit(null);
        onOpen();
    };
    const onEdit = (movie:Movie)=>{
        console.log('onEdit Click ',movie);
        setMovieToEdit(movie);
        onOpen();
    };


  return (
    <>
        <MovieFormDialog isOpen={isOpen}
                         onClose={onClose}
                         movieToEdit={movieToEdit}
                         addMovie={addMovie}
                         editMovie={editMovie}/>
        <CustomConfirmDialog
            ref={confirmDialog}
            title={'Delete movie'}
            message={'Are you sure you want to delete movie'}
            onConfirm={onDeleteConfirm}
        />
        <div style={{width:'100%'}}>
            <Button colorScheme='blue' onClick={newBtnHandler}>New</Button>
        </div>
        {
            isLoading && <h3>Loading...</h3>
        }
        {
            data && data.map(movie=><MovieItem key={movie._id}
                                               onEdit={onEdit}
                                               onDelete={onDelete}
                                               movie={movie}/>)
        }
    </>
  );
}
