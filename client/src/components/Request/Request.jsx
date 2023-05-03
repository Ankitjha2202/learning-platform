import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {

    const [course, setCourse] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
  return (
    <Container h={'92vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing="16">
            <Heading children="Request New Course"/>
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
           htmlFor='course' 
           children="Course"
           />
           <Textarea
           required 
           id="course" 
           value={course} 
           onChange={(e)=>setCourse(e.target.value)}
           placeholder="Explain the course"
           focusBorderColor="yellow"/>
           </Box>
           <Button my="4" colorScheme={'yellow'} type="submit">
            Send Mail
           </Button>
           <Box my="4">
            See avliable courses? <Link to="/courses"><Button colorScheme='yellow' varient='link'>click</Button>{' '}
            Here</Link>
           </Box>
        </form>
        </VStack>
    </Container>
    
  )
}

export default Request