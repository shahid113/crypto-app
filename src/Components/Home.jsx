import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleItem from './SingleItem';
import { Box, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';



function Home() {

  const [newsList, setNewsList]=useState([]);
  const [loading, setloading]=useState(true);
  const [error, setError]=useState(false);


  useEffect(()=>{


      const fetchData=async()=>{
        
           try{
            const {data}= await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=c3332f893b2440819545d2c2d801059d');
            setNewsList(data.articles);
            console.log(newsList)
            setloading(false)
            setError(false)
           }
           catch(error){
            console.log(error);
            setloading(false)
            setError(true)
           }

      }

      fetchData();

  }, [])



  if(error) return <Error message={"Unable to Fetching Coins..."}/>

  return (
    <VStack h={'fit-content'} w={'1000px'} m={'auto'} mt={'4'}>
      
      <Box> Top Trending Crypto News</Box>

      {loading ? <Loader/> : <>
      
      
      { newsList.map((item)=>{
        return<SingleItem 
              title={item.title}
              author={item.author}
              desc={item.description}
              url={item.url}
              imageURL={item.urlToImage}
              publishedAt={item.publishedAt}
              content={item.content}
              
              />
      })}
      
      </>}
      
     
      </VStack>
  )
}

export default Home