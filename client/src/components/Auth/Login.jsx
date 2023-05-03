import { Container, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react'
import { VStack,Heading,Input,Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [email,setEmail]= useState("")  
  const [password,setPassword]= useState("")  
  return <Container h={'95vh'}>
    <VStack h={"full"} justifycontent="center" spacing={'16'}>
        <Heading textTransform={'uppercase'} children="Welcome to CourseBundler"/>
        <form style={{width:"100%"}}>
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
           htmlFor='Password' 
           children="Password"
           />
           <Input required 
           id="password" 
           value={password} 
           onChange={(e)=>setPassword(e.target.value)}
           placeholder="Enter Your Password"
           focusBorderColor="yellow"
           type={'password'}/>
           </Box>
           <Box>
            <Link to="/ForgetPassword"><Button varient="link">
                Forget Password?
            </Button></Link>
           </Box>
           <Button my="4" colorScheme={'yellow'} type="submit">
            Login
           </Button>
           <Box my="4">
            New User? <Link to="/Register"><Button colorScheme='yellow' varient='link'>Sign Up</Button>{' '}
            Here</Link>
           </Box>
        </form>
    </VStack>
  </Container>
  
}

export default Login