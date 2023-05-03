import React, { useState } from 'react'
import { Box, Button, Container, Grid, Heading,Image,Input,Select,VStack } from '@chakra-ui/react'
import cursor from "../../../assets/images/cursor.png"
import Sidebar from '../Sidebar'
import { fileuploadcss } from '../../Auth/Register'
const CreateCourse = () => {
    const [title,setTitle]=useState("")
    const [desciption,setDescription]=useState("")
    const [createdBy,setCreatedBy]=useState("")
    const [category,setCategory]=useState("")
    const [image,setImage]=useState("")
    const [ImagePrev,setImagePrev]=useState("")
    const categories=[
        "Web Development",
        "App Development",
        "Data Science",
        "Game Development"
    ];
    const changeImageHandler = (e) =>{
        const file=e.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file)
        reader.onload= () =>{
          setImagePrev(reader.result);
          setImage(file)
        };
    }
  return (
    <Grid
    css={{
        cursor:`url(${cursor}) , default`,
    }}
     minH={'100vh'} 
     templateColumns={['1fr','5fr 1fr']}
    >
        <Container py="16">
           <Heading my="16" textTransform={'uppercase'} children="Create Course" my="16" textAlign={['center','left']}/>
           <VStack m="auto" sacing={"8"}>
              <Input value={title}
              onChange={e=>setTitle(e.target.value)}
              placeholder="Title"
              type={'text'}
              focusBorderColor="purple.300"/>{' '}
              <Input value={desciption}
              onChange={e=>setDescription(e.target.value)}
              placeholder="Description"
              type={'text'}
              focusBorderColor="purple.300"/>
              <Input value={createdBy}
              onChange={e=>setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              type={'text'}
              focusBorderColor="purple.300"/>
              <Select focusBorderColor='purple.300'
              value={category}
              onChange={e=>setCategory(e.target.value)}
              >
               
               {
               categories.map(item=>(
                  <option value={item} key={item}>{item}</option>
               ))}
              </Select>
              <Input 
           accept='image/*'
           id="chooseAvatar" 
           focusBorderColor="purple.300"
           type={'file'}
           css={{
            '&::file-selector-button':{
                ...fileuploadcss,color:'purple',
            },
           }}
           onChange={changeImageHandler}
           />
           {ImagePrev && (
            <Image src={ImagePrev} boxSize="64" objectFit={'contain'}/>
           )}
           <Button w="full" colorScheme={'purple'} type="submit">
             Create
           </Button>
           </VStack>
        </Container>
        <Sidebar/>
    </Grid>
  )
}

export default CreateCourse