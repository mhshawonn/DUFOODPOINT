import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Home from './Home'
import Footer from './component/Footer/Footer'
import LogIn from './component/LogInPopUp/LogIn'
import StoreContextProvider from './context/storeContext'
import { Outlet } from 'react-router-dom'

const App = () => {
    

  return (
   
    <>
    <StoreContextProvider>
    <Navbar ></Navbar>
    <div className='app'> 
      <Outlet>
   
     
     <Home></Home>
     
      
      </Outlet>
      <Footer></Footer>
      
    </div>
    </StoreContextProvider>
    </>
  )
}

export default App
