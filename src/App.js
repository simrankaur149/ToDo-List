import React from "react";
import Cards from "./Components/Cards";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Nav from "./Components/Nav";



const App = ()=>{

  

  return(
   
   <>
   
    <BrowserRouter>
    <Nav/> 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Services' element={<Services/>} />
    </Routes>
    </BrowserRouter> 
    

  
      <Cards
      imageAlt = "https://images.unsplash.com/photo-1682319375705-5668951c16ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
      title = "Heading"
      para = "this is the first paragraph"
      />
    
    
    
    </>
    

    
  )

}

export default App