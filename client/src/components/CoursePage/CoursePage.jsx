import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import IntroVideo from '../../assets/videos/intro.mp4'

const CoursePage = () => {
  // const lectureTitle="LectureTitle";
  const [lectureNumber,setlectureNumber]=useState(0);
  const lectures=[{
    _id:"sksskskk",
    title:"sample1",
    description:"anksjka ndmnksnk",
    video:{
      url:'sassks',
    }
  },
    {
      _id:"sksskskk",
      title:"sample2",
      description:"anksjka ndmnksnk",
      video:{
        url:'sassks',
      }},{
        _id:"sksskskk",
        title:"sample3",
        description:"anksjka ndmnksnk",
        video:{
          url:'sassks',
        }},
]
  return (
  <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>
    <Box>
    <video width={'100%'}
           controls 
           controlsList="nodownload noremoteplayback"
           disablePictureInPicture
           disableRemotePlayback
           src={IntroVideo}> 
    </video>
    <Heading children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} m="4"/>
    <Heading children="Description" m="4"/>
    <Text m="4" children={lectures[lectureNumber].description}/>
    </Box>
    <VStack>
      {
        lectures.map((element,index)=>(
          <button
          onClick={()=>setlectureNumber(index)}
          key={element._id}
          style={{
            width:"100%",
            padding:"1rem",
            textAlign:"center",
            margin:0,
            borderBottom:'1px solid rgba(0,0,0,0.2)',
          }}
          >
            <Text noOfLines={1}>
              #{index+1} {element.title}
            </Text>
          </button>
        ))
      }
    </VStack>
  </Grid>
  
  )
}

export default CoursePage