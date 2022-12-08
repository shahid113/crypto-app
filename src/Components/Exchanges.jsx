import { Container, HStack } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../index'
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import Error from './Error';

function Exchanges() {

     const [exchanges, setExchanges]=useState([]);
     const [loading, setloading]=useState(true);
     const [error, setError]=useState(false);


     useEffect(()=>{
       
        const fetchExchanges= async ()=>{

            try{
              const {data}=await axios.get(`${baseURL}/exchanges`)
              setExchanges(data);
              setloading(false)
            }
            catch(error){
                setloading(false);
                setError(true);

            }


        }

        fetchExchanges();

     }, [])

       
     if(error) return <Error/>

     return <Container maxW={"1000px"} mt={"4"}>
            
      {
         loading ? <Loader/> : <>

           <HStack wrap={"wrap"} justifyContent={"center"}>
            {
                exchanges.map((item)=>(
                <ExchangeCard 
                              key={item.id}
                              name={item.name} 
                              img={item.image}
                              rank={item.trust_score_rank}
                              url ={item.url}

                
                 />))
            }
           </HStack>
         
         </>
      }

     </Container>



}

export default Exchanges