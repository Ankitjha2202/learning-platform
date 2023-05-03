import { Avatar, Container, Heading, Stack, Text, VStack,Box,HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import IntroVideo from "../../assets/videos/intro.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndCondition from "../../assets/docs/termsAndCondition"

const Founder = () =>(
  <Stack direction={['column','row']} spacing={["4","16"]} padding={'8'}>
    <VStack>
        <Avatar src="https://avatars.githubusercontent.com/u/74873978?s=400&u=0bb28f8913bc82c9728bdcf316b8575e255b1cac&v=4"boxSize={["40","48"]}/>
        <Text children="Co-founder" opacity={0.7}/>
    </VStack>
    <VStack justifyContent={"center"} textAlign={["center","flex-start"]}>
        <Heading children="Ankit Jha"/>
        <Text children="I am a Full Stack Developer and a Tech Enthusiast" textAlign={['center','left']}/>
    </VStack>
  </Stack>
)
const VideoPlayer = () =>(
    <Box>
    <video controls 
           autoPlay
           loop
           controlsList="nodownload nofullscreen noremoteplayback"
           disablePictureInPicture
           disableRemotePlayback
           src={IntroVideo}> 
    </video>
   </Box>
);
const TandC = ({termsAndCondition}) =>(
  <Box>
    <Heading size={"md"} children="Terms & Conditions" textAlign={["center","left"]} my="4"/>
    <Box h="sm" 
    p="4"
    overflow={'scroll'}
    >
     <Text 
     fontFamily={'heading'}
     letterSpacing={'widest'} 
     textAlign={["center","left"]}
     >{termsAndCondition}
     </Text>
     <Heading size={"xs"} children="Refund only applicable for cancellation for 7 days" textAlign={["center","left"]} my="4"/>
    </Box>
  </Box>
);
const About = () => {
  return  (
  <Container maxW={'container.lg'} padding="16"  boxShadow={'lg'}>
    <Heading children='About Us' textalign={['center','left']}/>
    <Founder/>
    <Stack m="g" direction={["column","row"]} alignItems={'center'}>
     <Text fontFamily={'curvasive'} m='8' textAlign={['center','left']}>
        We are a Video streaming platform which courses available for premium users.
     </Text>
     <Link to="/Subscribe">
        <Button varient={'ghost'} colorScheme="yellow">
            Checkout Our Plan!
        </Button>
     </Link>
    </Stack>
    <VideoPlayer/>
    <TandC termsAndCondition={termsAndCondition} />
    <HStack my="4" p={"4"}>
       <RiSecurePaymentFill/>
       <Heading size={"xs"} fontFamily="sans-serif" textColor={'uppercase'} children={"Payment is secured by Razorpay"}/>
    </HStack>
  </Container>
  )
}

export default About;