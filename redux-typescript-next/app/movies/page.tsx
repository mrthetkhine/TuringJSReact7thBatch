'use client';
import {Metadata} from "next";
import { ButtonGroup, useDisclosure} from '@chakra-ui/react'
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack
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

const movies:Array<Movie> = [
    {
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

    }
]
export default function MoviePage() {

    const formik = useFormik({
        initialValues: {
            title: "",
            director: {
                name: "",
                phoneNo:"",
            },
            year:'',

        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnCloseHandler =()=>{
        onClose();
        console.log('Close modal handler ',isOpen);
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
                            <form onSubmit={formik.handleSubmit}>
                                <VStack spacing={4} align="flex-start">
                                    <FormControl>
                                        <FormLabel htmlFor="email">Title</FormLabel>
                                        <Input
                                            id="title"
                                            name="title"

                                            onChange={formik.handleChange}
                                            value={formik.values.title}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor="name">Director name</FormLabel>
                                        <Input
                                            id="name"
                                            name="name"

                                            onChange={formik.handleChange}
                                            value={formik.values.director.name}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor="name">Director Phone</FormLabel>
                                        <Input
                                            id="phone"
                                            name="phone"

                                            onChange={formik.handleChange}
                                            value={formik.values.director.phoneNo}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel htmlFor="password">Year</FormLabel>
                                        <Input
                                            id="year"
                                            name="year"
                                            onChange={formik.handleChange}
                                            value={formik.values.year}
                                        />
                                    </FormControl>

                                    <Button type="submit" colorScheme="purple" width="full">
                                        Save
                                    </Button>
                                </VStack>
                            </form>
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
        <div style={{width:'100%'}}>
            <Button colorScheme='blue' onClick={onOpen}>New</Button>
        </div>

        {
            movies.map(movie=><MovieUI key={movie._id}
                                       movie={movie}/>)
        }
    </>
  );
}
