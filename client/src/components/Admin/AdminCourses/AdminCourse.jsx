import React from 'react'
import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import cursor from "../../../assets/images/cursor.png"
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'
import Sidebar from '../Sidebar'

const AdminCourse = () => {
  const courses=[{
     _id:"123",
     title:"react course",
     category:"web devlopment",
     createdBy:"shiv",
     poster:{
        url:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
     },
     views:5000,
     numOfVideos:10, 
},]

const {isOpen, onClose, onOpen} = useDisclosure();

const courseDetailsHandler=(userId)=>{
    onOpen();
}
const deleteButtonHandler=(userId)=>{
  console.log(userId)
}

const deleteLectureButtonHandler = (courseId, lectureId) =>{
    console.log(courseId);
    console.log(lectureId);
}

const addLectureHandler = (e, courseId, title, description, video) =>{
    e.preventDefault();
    console.log("added")
}

  return (
    <Grid
    css={{ 
        cursor:`url(${cursor}) , default`,
    }}
     minH={'100vh'} 
     templateColumns={['1fr','5fr 1fr']}
    >
        <Box p={["0","8"]} overflowX="auto">
        <Heading my="16" textTransform={'uppercase'} children="All Courses" textAlign={['center','left']}/>
        <TableContainer w={["100vw","full"]}>
          <Table varient={'simple'} size="lg">
             <TableCaption>All available Courses in the databases</TableCaption>
             <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
             </Thead>
             <Tbody>
                {
                  courses.map(item=>(
                    <Row 
                    courseDetailsHandler={courseDetailsHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    key={item._id} item={item}/>
                  ))
                }
             </Tbody>
          </Table>
        </TableContainer>
     <CourseModal 
        isOpen={isOpen} 
        onClose={onClose} 
        id={courses._id} 
        deleteButtonHandler={deleteLectureButtonHandler}
        addLectureHandler = {addLectureHandler}
        courseTitle="react course"
        />
        </Box>
        <Sidebar/>
    </Grid>
  )
}

export default AdminCourse;

function Row({item,courseDetailsHandler,deleteButtonHandler}){
  return(
    <Tr>
  <Td>#{item._id}</Td>
  <Td>
    <Image src={item.poster.url}/>
  </Td>
  <Td>{item.title}</Td>
  <Td textTransform={'uppercase'}>{item.category}</Td>
  <Td>{item.createdBy}</Td>
  <Td isNumeric>{item.views}</Td>
  <Td isNumeric>{item.numOfVideos}</Td>

  <Td isNumeric>
    <HStack justifyContent={'flex-end'}>
      <Button onClick={()=>courseDetailsHandler(item._id)} variant={"outline"} color="purple.500">View Lecture</Button>
      <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
        <RiDeleteBin7Fill/>
      </Button>
    </HStack>
  </Td>
  </Tr>
  );
  
}