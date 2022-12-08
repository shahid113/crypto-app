import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function Error({message}) {
  return (
    <Alert status="error" position={"fixed"} w={"container.xl"}>
        <AlertIcon/>
            {message}
    </Alert>
  )
}

export default Error