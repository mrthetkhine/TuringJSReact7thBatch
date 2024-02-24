'use client';
import {Metadata} from "next";
import React from "react";
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
import MovieUI from "@/app/components/Movie/MovieUI";
import styles from './../styles/movie.page.css';
import {useGetUserByIdQuery} from "@/lib/redux/services/users";
import {useAddMovieMutation, useGetAllMovieQuery} from "@/lib/redux/services/movieApi";
import {useDeleteTodoMutation} from "@/lib/redux/services/backendApi";
import ConfirmDialog from "@/app/components/ConfirmDialog";
import CustomConfirmDialog from "@/app/components/CustomConfirmDialog";
console.log('styles ',styles);
const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    year: Yup.string()
        .required('Required'),
    name:Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    phoneNo:Yup.string()
        .required('Required'),
});

const movies:Array<Movie> = [
    /*{
        "_id": "659c048fc74501e3db447c84",
        "title": "Avata",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "659c048fc74501e3db447c85"
        },
        "year": 2025,

    },
    {
        "_id": "659c04bcc74501e3db447c87",
        "title": "Avatar 2",
        "director": {
            "name": "Jame Cameron",
            "phoneNo": "09993",
            "_id": "659c04bcc74501e3db447c88"
        },
        "year": 2025,

    }*/
]
export default function MoviePage() {
    const { data, error, isLoading } = useGetAllMovieQuery();
    const [addMovieApi,addMovieResult] = useAddMovieMutation();
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
    const onDelete= (movie:Movie)=>{
        console.log('OnDelete Click ',movie);
        console.log('Dialog ',confirmDialog);
        confirmDialog.current.open();
    }
    const onDeleteConfirm = ()=>{
      console.log('OnDelete Confirm ');
    };
  return (
    <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New Movie</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex align="center" justify="center" >
                        <Box bg="white"  rounded="md">
                            <Formik
                                initialValues={{
                                    title: '',
                                    year: '',
                                    name:'',
                                    phoneNo:''
                                }}
                                validationSchema={MovieSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                    let movie:Movie= {
                                        title:values.title,
                                        year:values.year,
                                        director:{
                                            name:values.name,
                                            phoneNo:values.phoneNo
                                        }
                                    };
                                    console.log(movie);
                                    addMovie(movie);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <FormControl>
                                            <FormLabel htmlFor="title">Title</FormLabel>
                                            <Field name="title"
                                                   as={Input}
                                                   />
                                            {errors.title && touched.title ? (
                                                <div className={styles.error}> {errors.title}</div>
                                            ) : null}
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor="year">Year</FormLabel>
                                            <Field name="year"
                                                   as={Input}
                                                   />
                                            {errors.year && touched.year ? (
                                                <div className={styles.error}>{errors.year}</div>
                                            ) : null}
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor="name">Name</FormLabel>
                                            <Field name="name"
                                                   as={Input}

                                                />
                                            {errors.name && touched.name ?
                                                <div className={styles.error}>{errors.name}</div> : null}
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel htmlFor="phoneNo">Phone No</FormLabel>
                                            <Field name="phoneNo"
                                                   as={Input}
                                                />
                                            {errors.phoneNo && touched.phoneNo ?
                                                <div className={styles.error}>{errors.phoneNo}</div> : null}
                                        </FormControl>

                                        <Button type="submit" colorScheme="purple" width="full">
                                            Save
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    {/*<Button colorScheme="purple" width="full"
                            onClick={btnCloseHandler}>
                        Close
                    </Button>*/}

                </ModalFooter>
            </ModalContent>
        </Modal>
        <div className={styles.error}>
            <CustomConfirmDialog
                            ref={confirmDialog}
                            title={'Delete movie'}
                            message={'Are you sure you want to delete movie'}
                            onConfirm={onDeleteConfirm}
            />
        </div>
        <div style={{width:'100%'}}>
            <Button colorScheme='blue' onClick={onOpen}>New</Button>
        </div>
        {
            isLoading && <h3>Loading...</h3>
        }
        {
            data && data.map(movie=><MovieUI key={movie._id}
                                             onDelete={onDelete}
                                       movie={movie}/>)
        }
    </>
  );
}
