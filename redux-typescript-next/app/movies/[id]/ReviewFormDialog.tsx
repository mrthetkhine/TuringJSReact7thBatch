import * as Yup from "yup";
import {
    Box, Button,
    Flex,
    FormControl, FormLabel, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import styles from "@/app/movies/movie.module.css";
import React, {useState} from "react";
import {Rating} from "react-simple-star-rating";
import {Review} from "@/lib/redux/services/types";

const ReviewSchema = Yup.object().shape({
    review: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    rating: Yup.string()
        .required('Required'),

});
export default function ReviewFormDialog({
                                             isOpen,
                                             onClose,
                                             addReview,
                                         }:{
    isOpen:any,
    onClose:any,
    addReview:(review:Review)=>void,
})
{   const [rating, setRating] = useState(0);
    const initialValues = {
        rating:0,
        review:'',
    }
    const onSubmitHandler = (values)=>{
        values.rating = rating;
        console.log('Values ',values);
        addReview(values);
    };

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate);
        console.log('Rating ',rate);
        // other logic
    }
    return(<>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    New Review
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex align="center" justify="center" >
                        <Box bg="white"  rounded="md">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={ReviewSchema}
                                onSubmit={onSubmitHandler}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div>
                                            <Rating
                                                style={{width:'100%'}}
                                                onClick={handleRating}
                                                initialValue={rating} />
                                        </div>
                                        <FormControl>
                                            <FormLabel htmlFor="review">Review</FormLabel>
                                            <Field name="review"
                                                   as={Input}
                                            />
                                            {errors.review && touched.review ? (
                                                <div className={styles.error}> {errors.review}</div>
                                            ) : null}
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
}