import React from 'react'
import {VStack,Stack, Heading, HStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
  <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
   <Stack direction={["column" , "row"]}>
        <VStack alignItems={["center","flex-start"]} width={'full'}>
        <Heading children="All rights reserved" color={'white'}/>
        <Heading size="sm" children="@ Biddi Sutta Programmer" color={'red'}/>
        </VStack>
        <HStack spacing={["2","10"]} 
        justifyContent={'center'}
        fontSize={50}
        color={'white'}
        >
        <a href="https://youtube.com/6packprogrammer" target='_blank'>
            <TiSocialYoutubeCircular/>
            {/* <TiSocialYoutubeCircular/> */}
        </a>
        <a href="https://www.instagram.com/_ankitj_" target='_blank'>
            <TiSocialInstagramCircular/>
            {/* <TiSocialYoutubeCircular/> */}
        </a>
        <a href="https://github.com/Ankitjha2202" target='_blank'>
            <DiGithub/>
            {/* <TiSocialYoutubeCircular/> */}
        </a>
        </HStack>
     </Stack>
    </Box>
  );
};

export default Footer