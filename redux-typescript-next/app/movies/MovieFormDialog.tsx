import {
    Box, Button,
    Flex,
    FormControl, FormLabel, Input, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import {Movie} from "@/lib/redux/services/types";
import styles from "@/app/movies/movie.module.css";
import React from "react";
import * as Yup from "yup";
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

export default function MovieFormDialog({
    isOpen,
    onClose,
    movieToEdit,
    addMovie,
    editMovie,
    }:{
    isOpen:any,
    onClose:any,
    movieToEdit?:Movie,
    addMovie:(movie:Movie)=>void,
    editMovie:(movie:Movie)=>void
})
{
    //console.log('Movie to edit ',movieToEdit);
    let initialValues = {
        title:movieToEdit?movieToEdit.title:'',
        year:movieToEdit?movieToEdit.year:'',
        name: movieToEdit?movieToEdit.director.name:'',
        phoneNo: movieToEdit?movieToEdit.director.phoneNo:'',
    };

    const onSubmitHandler =(values:any) =>{
        // same shape as initial values
        //console.log(values);
        let movie: Movie = {
            title: values.title,
            year: values.year,
            director: {
                name: values.name,
                phoneNo: values.phoneNo
            }
        };
        console.log(movie);
        if (movieToEdit) {
            editMovie(movie);
        } else {
            addMovie(movie);
        }

    }
    return(<>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    {movieToEdit?'Edit Movie':'New Movie'}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex align="center" justify="center" >
                        <Box bg="white"  rounded="md">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={MovieSchema}
                                onSubmit={onSubmitHandler}
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


                </ModalFooter>
            </ModalContent>
        </Modal>
    </>);
};