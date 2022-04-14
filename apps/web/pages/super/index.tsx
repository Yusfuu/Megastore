import type { NextPage } from 'next';
import { Layout } from 'layouts/super.layout';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

import { gql, useMutation } from '@apollo/client';

// function InitialFocus() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const initialRef = useRef();
//   const finalRef = useRef();

//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>
//       <Button ml={4} ref={finalRef}>
//         I'll receive focus on close
//       </Button>

//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create your account</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <FormControl>
//               <FormLabel>First name</FormLabel>
//               <Input ref={initialRef} placeholder='First name' />
//             </FormControl>

//             <FormControl mt={4}>
//               <FormLabel>Last name</FormLabel>
//               <Input placeholder='Last name' />
//             </FormControl>
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='blue' mr={3}>
//               Save
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

export const Page: NextPage = ({}) => {
  return (
    <>
      {/* <Button colorScheme='blue'>Button</Button> */}
      {/* <h1>Hello</h1> */}
      {/* <InitialFocus /> */}
      <UploadFile />
    </>
  );
};

//@ts-ignore
Page.Layout = Layout;

export const getServerSideProps = async () => {
  return { props: {} };
};

export default Page;

const MUTATION = gql`
  mutation CreateStore(
    $name: String!
    $thumbnail: [Upload]!
    $document_verification: [Upload]!
  ) {
    createStore(
      name: $name
      thumbnail: $thumbnail
      document_verification: $document_verification
    ) {
      id
      thumbnail {
        id
        src
        alt
      }
    }
  }
`;
function UploadFile() {
  const [preview, setPreview] = useState([]);

  const [mutate, { data }] = useMutation(MUTATION, {
    onCompleted: () => {
      console.log('completed');
    },
  });
  console.log(data);

  const onChange = async (e: any) => {
    const file = e.target.files[0];

    console.log({ [file.name]: file });

    // setPreview([...preview, { [name]: file }]);
    // console.log({
    //   variables: {
    //     name: 'store 51',
    //     thumbnail: [file],
    //     document_verification: [file],
    //   },
    // });

    // mutate({
    //   variables: {
    //     name: 'store 51',
    //     thumbnail: [file],
    //     document_verification: [file],
    //   },
    // });
  };

  return (
    <input
      onChange={onChange}
      type='file'
      className='block w-full text-sm text-slate-500
   file:mr-4 file:py-2 file:px-4
   file:rounded-full file:border-0
   file:text-sm file:font-semibold
   file:bg-violet-50 file:text-violet-700
   hover:file:bg-violet-100
 '
    />
  );
}
