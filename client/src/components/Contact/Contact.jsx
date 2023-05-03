import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  return (
    <Container h={'92vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing="16">
            <Heading children="Contact Us"/>
            <form style={{width:"100%"}}>
           <Box my="4">
           <FormLabel 
           htmlFor='name' 
           children="Name"
           />
           <Input required 
           id="name" 
           type='text'
           value={name} 
           onChange={(e)=>setName(e.target.value)}
           placeholder="abc"
           focusBorderColor="yellow"/>
           </Box>
           <Box my="4">
           <FormLabel 
           htmlFor='email' 
           children="Email Address"
           />
           <Input required 
           id="email" 
           value={email} 
           onChange={(e)=>setEmail(e.target.value)}
           placeholder="abc@gmail.com"
           focusBorderColor="yellow"/>
           </Box>
           <Box my="4">
           <FormLabel 
           htmlFor='message' 
           children="Message"
           />
           <Textarea
           required 
           id="message" 
           value={message} 
           onChange={(e)=>setMessage(e.target.value)}
           placeholder="your message....."
           focusBorderColor="yellow"/>
           </Box>
           <Button my="4" colorScheme={'yellow'} type="submit">
            Send Mail
           </Button>
           <Box my="4">
            Request for a course? <Link to="/Request"><Button colorScheme='yellow' varient='link'>click</Button>{' '}
            Here</Link>
           </Box>
        </form>
        </VStack>
    </Container>
  )
}

export default Contact