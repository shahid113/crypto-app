import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinDetails from './Components/CoinDetails';
import Header from './Components/Header';
import Home from './Components/Home';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges'


function App() {
  return (
    <BrowserRouter>  
      <Header/>     
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/coin/:id' element={<CoinDetails/>}/>
         <Route path='/coins' element={<Coins/>}/>
         <Route path ='/exchanges' element={<Exchanges/>}/>    
      </Routes>
    </BrowserRouter>
  )
}

export default App