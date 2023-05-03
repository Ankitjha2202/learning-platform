import { Drawer, DrawerBody, DrawerHeader,DrawerOverlay,DrawerContent, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import React from 'react'
import ColorModeSwicther from "../../../ColorModeSwitcher"
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom'
// import Dashboard from '../../Admin/Dashboard/Dashboard';
// import { CgGhost } from 'react-icons/cg';
const LinkButton = ({url="/" , title='Home',onClose}) =>(
    <Link onClick={onClose} to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>   
)
const Header = () => {
    const {isOpen,onOpen,onClose}=useDisclosure();
    const isAuthenticated=true;
    const user={
        role:'admin'
    }
    const logoutHandler = () => {
       console.log("Logout");
       onClose();
    }
  return ( <>
     <ColorModeSwicther/>
     <Button onClick={onOpen} rounded={'3xl'} colorScheme='yellow' width={'13'}>
        <RiMenu5Fill/>
     </Button>
     <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay backdropFilter={'blue{5px}'}/> 
      <DrawerContent>
          <DrawerHeader>COURSE BUNDLER</DrawerHeader>
            <DrawerBody>
                <VStack spacing="5" alignItems={'flex-start'}>
                    <LinkButton onClose={onClose} url="/" title="Home"/>  
                    <LinkButton onClose={onClose} url="/courses" title="Browse All Courses"/>  
                    <LinkButton onClose={onClose} url="/Request" title="Request a Course"/>  
                    <LinkButton onClose={onClose} url="/contact" title="Contact"/>          
                    <LinkButton onClose={onClose} url="/About" title="About"/>     
                    <HStack justifyContent={'space-evenly'} posisiton="absolute" bottom={"2rem"} width="80%">
                    {
                        isAuthenticated?(
                        <>
                           <VStack>
                            <HStack>
                            <Link onClick={onClose}  to="/profile">
                            <Button varient={'ghost'} colorScheme='yellow'>
                               Profile
                            </Button>
                            </Link>
                            <Button varient={'ghost'} onClick={logoutHandler}>
                                <RiLogoutBoxLine/>
                                Logout
                            </Button>
                            </HStack>
{
    user && user.role==="admin" && <Link onClick={onClose}  to="/admin/dashboard">
        <Button colorScheme='purple' varient='ghost'>
            <RiDashboardFill/>
            Dashboard
        </Button>
    </Link>
}
                           </VStack>
                        </>
                            ):
                            (
                            <>
                        <Link onClick={onClose} to="/Login">
                            <Button colorScheme='yellow'>Login</Button>
                            </Link>
                            <p>OR</p>
                            <Link onClick={onClose} to="/Register">
                            <Button colorScheme='yellow'>Sign Up</Button>
                            </Link>
                        </>
                        )
                    }
                    </HStack>
               </VStack>

            </DrawerBody>
              </DrawerContent>
        </Drawer>
  </>
  );
}

export default Header


