import { Button, Container, Heading,Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
const [email,setEmail]= useState("")
  return <Container heading="16" height="90vh">
    <form>
        <Heading children={'Forget Password'} textTransform={"uppercase"} my={16} textAlign={['center','left']}/>
        <VStack spacing={"8"}>
        <Input required 
           id="email" 
           value={email} 
           onChange={(e)=>setEmail(e.target.value)}
           placeholder="abc@gmail.com"
           focusBorderColor="yellow"/>
           <Button type="submit" colorScheme='yellow' width={'full'}>Send Reset Link</Button>
        </VStack>
    </form>
  </Container>
}

export default ForgetPassword