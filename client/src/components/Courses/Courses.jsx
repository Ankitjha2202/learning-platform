import { Button, Container, HStack, Heading,Input,Stack, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { CoursePage  from '../CoursePage/CoursePage';
const Course = ({views,title,imageSrc,id,addtoPlaylistHandler,creator,description,lectureCount}) =>{
    return (
    <VStack className='course' alignItems={["center","flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
       textAlign={['center','left']}
       maxW="200px"
       size={5}
       fontFamily={'sans-serif'}
       noOfLines={3}
       children={title}
      />
      <Text noOfLines={2} children={description}/> 
      <HStack>
      <Text fontWeight={'bold'} textTransform={'uppercase'} children={'Creator'}/> 
      <Text fontFamily={'body'} textTransform={'uppercase'} children={creator}/> 
      </HStack>
      <Heading
        textAlign={'center'}
        size='xs'
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        size='xs'
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column','row']} alignItems={'center'}>
       <Link to={`/course/${id}`}>
        <Button colorScheme='yellow'>Watch Now</Button>
       </Link>
       <Button 
       variant={'ghost'}
       colorScheme='yellow'
       onClick={()=>addtoPlaylistHandler(id)}
       >Add to Playlist</Button>
      </Stack>
    </VStack>
    )
}

const Courses = () => {
    const [keyword,setkeyword] = useState('');
    const [category,setCategory]= useState('');
    const addtoPlaylistHandler = () =>(
        console.log("Added to Playlist")
    )
    const categories=[
        "Web Development",
        "App Development",
        "Data Science",
        "Game Development"
    ];
  return <Container minH={'95vh'} maxW={'container.lg'} padding={'8'}>
    <Heading children="All Courses" m={8}/>
    <Input value={keyword} onChange={ e => setkeyword(e.target.value)} placeholder='Search a Course...' type='text'
    focusBorderColor='yellow'
    />
    <HStack>
       {
        categories.map((item,index)=>(
            <Button key={index} onClick={()=>setCategory(item)} minW={60}>
            <Text children={item}/>
            </Button>
        ))
       }
    </HStack>
<Stack 
direction={['column', 'row']}
flexWrap="wrap"
justifyContent={['flex-start', 'space-evenly']}
alignItems={['center','flex-start']}>
        <Course
            title={"Sample"}
                description={"Sample"}
                    views={23}
                        imageSrc={'https://blog.hubspot.com/hubfs/best-online-courses.jpg'}
                        id={"Sample"}
                    creator={"Sample"}
                lectureCount={2}
            addtoPlaylistHandler={addtoPlaylistHandler}
        />

</Stack>
  </Container>
}

export default Courses