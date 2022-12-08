import { Box, Container, RadioGroup, Radio, HStack, VStack, Text, Image, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge} from '@chakra-ui/react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

import React, { useState, useEffect } from 'react'
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../index';
import Error from './Error';

function CoinDetails() {

    const [coin, setCoin]=useState({});
    const [loading, setloading]=useState(true);
    const [error, setError]=useState(false);
    const [currency, setCurrency]=useState("inr");
    const params=useParams();

    const currencySymbol = currency==="inr"?"₹":currency==="eur"?"€": "$"


    
    useEffect(()=>{
       
        const fetchCoin = async ()=>{

            try{
              const {data}=await axios.get(`${baseURL}/coins/${params.id}`);
              setCoin(data);
              setloading(false);
              console.log(data)
            }
            catch(error){
                setloading(false);
                setError(true);

            }


        }

        fetchCoin();

     }, [])

       
    if(error) return <Error message={"Unable to Fetching Coin..."}/>


  return (
     <Container maxW={'container.xl'}>
       
       {loading? <Loader/> : <>
            
      
               
           <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack>
                <Radio value={"inr"}>₹ INR</Radio>        
                <Radio value={"usd"}>$ USD</Radio>  
                <Radio value={"eur"}>€ EUR</Radio>

              </HStack>
           </RadioGroup>


           <VStack spacing={"4"} p={"16"}>

            <Text fontSize={"small"} alignSelf={"center"}>
                Last Updated on {Date(coin.market_data_last_updated).split("G")[0]}
            </Text>


            <Image src={coin.image.large} 
                    w={"16"}
                    h={"16"}
                    objectFit={"contain"}
              
            />

            <Stat >
                <StatLabel>{coin.name}</StatLabel>
                <StatNumber>
                    {currencySymbol}
                    {coin.market_data.current_price[currency]}
                </StatNumber>

                <StatHelpText>
                    <StatArrow type={coin.market_data.price_change_percentage_24h>0 ? 'increase' : 'decrease'}/>
                    {coin.market_data.price_change_percentage_24h}%
                </StatHelpText>

                <Badge fontSize={"2xl"} bgColor={"blackAlpha.900"} color={"white"}>{ `#${coin.market_cap_rank}`} </Badge>

            </Stat>
                
                
                <Box w={"full"} p="4" mt={"10"}>   
                  <TableContainer>
                    <Table variant='striped' colorScheme='blue'>
                        <TableCaption> {coin.name} Statistics</TableCaption>
                        <Thead> </Thead>
                        <Tbody>

                        <Tr>
                            <Td>Max Supply</Td>
                            <Td>{coin.market_data.max_supply?coin.market_data.max_supply :"Unconfirmed"}</Td>
                        </Tr>
                        
                        <Tr>
                            <Td>Circulating Supply</Td>
                            <Td>{coin.market_data.circulating_supply}</Td>
                        </Tr>

                        <Tr>
                            <Td>Market Cap</Td>
                            <Td>{`${currencySymbol} ${coin.market_data.market_cap[currency]}`}</Td>
                        </Tr>

                        <Tr>
                            <Td>All Time Low</Td>
                            <Td>{coin.market_data.atl[currency]}</Td>
                        </Tr>

                        <Tr>
                            <Td>All Time High</Td>
                            <Td>{coin.market_data.ath[currency]}</Td>
                        </Tr>

                        </Tbody>
                    </Table>
                 </TableContainer>         
                </Box>

           </VStack>
       
       </>}

     </Container>
  )
}

export default CoinDetails