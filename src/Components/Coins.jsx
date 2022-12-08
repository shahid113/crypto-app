import { Button, Container, HStack, RadioGroup, Radio, Input} from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../index'
import Loader from './Loader';
import Error from './Error';
import CoinCard from './CoinCard';

function Coins() {

     const [coins, setCoins]=useState([]);
     const [loading, setloading]=useState(true);
     const [error, setError]=useState(false);
     const [page, setPage]=useState(1);
     const [currency, setCurrency]=useState("usd");
     const [search, setSearch]=useState('');

     const currencySymbol = currency==="inr"?"₹":currency==="eur"?"€": "$"

     const changePage =(page)=>{
        setPage(page);
        setloading(true);
     }

     const btns=new Array (132).fill(1);


     useEffect(()=>{
       
        const fetchCoins = async ()=>{

            try{
              const {data}=await axios.get(`${baseURL}/coins/markets?vs_currency=${currency}&page=${page}`);
              setCoins(data);
              setloading(false);
            }
            catch(error){
                setloading(false);
                setError(true);

            }


        }

        fetchCoins();

     }, [currency, page])


     const handleChange=(event)=>{
      setSearch(event.target.value);
      }


      const filteredCoins=coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()));
       
     if(error) return <Error message={"Unable to Fetching Coins..."}/>

     return <Container maxW='1000px'>
            
      {
         loading ? <Loader/> : <>

            
           <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack>
                <Radio value={"inr"}>₹ INR</Radio>        
                <Radio value={"usd"}>$ USD</Radio>  
                <Radio value={"eur"}>€ EUR</Radio>

              </HStack>
           </RadioGroup>

           <HStack justifyContent={"center"}> <Input placeholder='Search Crypto' onChange={handleChange} width="md" m={"3"}/></HStack>

           

           <HStack wrap={"wrap"} justifyContent={"center"} mt={"3"}>
            
            {filteredCoins.map((item)=>(
                <CoinCard
                              id={item.id}
                              key={item.id}
                              name={item.name} 
                              img={item.image}
                              symbol={item.symbol}
                              url ={item.url}
                              price={item.current_price}
                              currencySymbol={currencySymbol}

                
                 />))
            }
            
           </HStack>

           <HStack w={"full"} overflow={"auto"} p={"4"}>

            {
                btns.map((item, index)=>(

                    <Button bgColor={"blackAlpha.900"} color={"white"} onClick={()=>changePage(index+1)}>
                        {index+1}
                    </Button>

                ))
            }
              
           </HStack>
         
         </>
      }

</Container>



}

export default Coins