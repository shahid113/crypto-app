import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return <HStack p={"6"} shadow={"md"} bgColor={"whiteAlpha.800"}>
     
     <Button colorScheme='linkedin' variant='outline'>
           <Link to="/">Home</Link>
     </Button>


     <Button colorScheme='linkedin' variant='outline'>
           <Link to="/coins">Coins</Link>
     </Button>


     <Button colorScheme='linkedin' variant='outline'>
           <Link to="/exchanges">Exchanges</Link>
     </Button>

  </HStack>
}

export default Header