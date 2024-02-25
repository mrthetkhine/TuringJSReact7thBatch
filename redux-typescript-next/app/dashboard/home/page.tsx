"use client";
import { useRouter } from 'next/navigation'
import {Button, ButtonGroup, useDisclosure} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
/*async function getData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,1000);
    });
}*/
export default  function Page() {
    const router = useRouter();
    //const data = await getData();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnHandler = ()=>{
        console.log('Go to movie');
        router.push('/movies');
    };
    const btnCloseHandler =()=>{
        onClose();
        console.log('Close modal handler ',isOpen);
    };
  return (
    <>
      <h1>Dashboard/Home</h1>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Modal Body
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}
                            onClick={btnCloseHandler}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        <Button type={"button"}
                colorScheme='teal'
                onClick={onOpen}>
            Show Modal
        </Button>
        <Button type={"button"}
                onClick={btnHandler}>
            Go to movies
        </Button>
    </>
  );
}
