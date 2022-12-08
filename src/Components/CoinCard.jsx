import React from 'react'
import { Link } from 'react-router-dom'
import { VStack, Image, Heading, Text } from '@chakra-ui/react'

function CoinCard({id, name, img, symbol, price, currencySymbol }) {
  return (
      
    <Link to={`/coin/${id}`}>

    <VStack w={"52"} p={"8"} shadow={"lg"}  borderRadius={"lg"} m={"2"} >
        <Image src={img} w={"10"} h={"10"}></Image>


            <Heading size={"md"}>
                {symbol}
            </Heading>

            <Text>{name}</Text>
            <Text>{`${currencySymbol}${price}`}</Text>
            
    </VStack>
    
    </Link>
  )
}

export default CoinCard