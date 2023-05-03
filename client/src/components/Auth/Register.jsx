import { Avatar, Container, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react'
import { VStack,Heading,Input,Box } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const fileuploadcss={
    cursor:"pointer",marginLeft:"-5%",width:"110%",border:"none",height:"100%",colorScheme:"blue"
}

const fileuploadstyle={
   "&::file-selector-button":fileuploadcss,
}
const Register = () => {
  const [email,setEmail]= useState("")  
  const [name,setName]= useState("")  
  const [password,setPassword]= useState("")  
  const [imagePrev,setimagePrev]= useState("")  
  const [image,setimage]= useState("")  
  const changeImageHandler = (e) =>{
      const file=e.target.files[0];
      const reader=new FileReader();
      reader.readAsDataURL(file)
      reader.onload= () =>{
        setimagePrev(reader.result);
        setimage(file)
      };
  }
  return <Container h={'95vh'}>
    <VStack h={"full"} justifycontent="center" spacing={'16'}>
        <Heading textTransform={'uppercase'} children="Registration"/>
        <form style={{width:"100%"}}>
            <Box my={'4'} display={'flex'} justifyContent={'center'}>
                <Avatar src={imagePrev} size={'lg'}/>
            </Box>
        <Box my="4">
           <FormLabel 
           htmlFor='Name' 
           children="Name"
           />
           <Input required 
           type="text"
           id='name'
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
           htmlFor='Password' 
           children="Password"
           />
           <Input required 
           id="password" 
           onChange={(e)=>setPassword(e.target.value)}
           placeholder="Enter Your Password"
           focusBorderColor="yellow"
           type={'password'}/>
           </Box>
           <Box my="4">
           <FormLabel 
           htmlFor='chooseAvatar' 
           children="Choose Avatar"
           />
           <Input required 
           accept='image/*'
           id="chooseAvatar" 
           focusBorderColor="yellow"
           type={'file'}
           css={fileuploadstyle}
           onChange={changeImageHandler}
           />
           </Box>

           <Button my="4" colorScheme={'yellow'} type="submit">
            Sign Up
           </Button>
           <Box my="4">
            Already Signed Up?{' '} <Link to="/Login"><Button colorScheme='yellow' varient='link'>Login</Button>{' '}
            here</Link>
           </Box>
        </form>
    </VStack>
  </Container>
  
}

export default Register