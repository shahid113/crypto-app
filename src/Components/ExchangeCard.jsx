import { VStack, Image, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function ExchangeCard({key, img, name, rank, url}) {
  return (
            <a href={url} target={"blank"}>

                <VStack w={"52"} p={"8"} shadow={"lg"}  borderRadius={"lg"} m={"2"} >
                    <Image src={img} w={"10"} h={"10"}></Image>


                        <Heading size={"md"}>
                            {rank}
                        </Heading>

                        <Text>{name}</Text>
                        
                </VStack>
                
                </a>

  )
}

export default ExchangeCard