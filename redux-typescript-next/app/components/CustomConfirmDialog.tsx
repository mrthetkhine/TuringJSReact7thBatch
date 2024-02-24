import { forwardRef, useRef, useImperativeHandle } from 'react';
import React from "react";
import {Button, useDisclosure} from "@chakra-ui/react";

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react'
import ConfirmDialog from "@/app/components/ConfirmDialog";
const CustomConfirmDialog = forwardRef(function MyInput(props, ref) {
    const inputRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                console.log('Open');
                onOpen();
            },
            close() {
                console.log('Close ');
                onClose();
            },
        };
    }, []);
    const onConfirmHandler =()=>{
        props.onConfirm();
        onClose();
    };
    return (<>
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        {props.title}
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        {props.message}
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={onConfirmHandler} ml={3}>
                            Confirm
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
        </>);
});
export default CustomConfirmDialog;